const express = require('express');
const { authenticateToken } = require('../middleware/auth');
const { detectContactChannels, notifyContactDetailsShared, notifyFirstRobotChat } = require('../services/larkNotifications');
const { v4: uuidv4 } = require('uuid');
const db = require('../database');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// AI Keyword matching configuration
const keywordRules = [
  {
    keywords: ['inci', 'cas', 'grade', 'assay', 'purity', 'solubility', 'ph', 'use level', 'active', 'ingredient', 'source', 'sourcing', 'unlisted'],
    response: 'Any Cosmetic Ingredient Sourcing 🧪\n\nThe material does not need to appear in our featured catalog. Share its name, INCI or CAS number, target grade, formula application, quantity and destination market. We can help investigate sourcing options, samples and available technical documents.'
  },
  {
    keywords: ['moq', 'minimum order', 'sample', 'quantity', 'pack size', 'commercial supply'],
    response: 'Ingredient Samples & Supply 📦\n\nTell us the ingredient, required grade, estimated quantity and destination market. Sample availability, pack size, MOQ and lead time are confirmed against the requested specification.'
  },
  {
    keywords: ['document', 'report', 'customs', 'clearance', 'stability test', 'compatibility test', 'ingredient list', 'compliance'],
    response: 'Technical Documents 📄\n\nAvailable documents may include specification, SDS, COA and origin information. Exact documents depend on the material, grade, supplier and destination-market requirements.'
  },
  {
    keywords: ['price', 'cost', 'how much', 'cheap', 'discount', 'promotion', 'pricing', 'quote'],
    response: 'Ingredient Sourcing Quotation 💰\n\nShare the material name or INCI, requested grade, quantity, destination and documentation needs. Pricing follows confirmed availability, specification and order volume.'
  },
  {
    keywords: ['shipping', 'delivery', 'logistics', 'transport', 'how long', 'freight', 'tracking'],
    response: 'Shipping & Delivery 🚢\n\nShipping options and required commercial or transport documents depend on the material classification, quantity and destination. Requirements are confirmed before an order is placed.'
  },
  {
    keywords: ['quality', 'batch', 'coa', 'contamination', 'variance', 'appearance', 'odor', 'color', 'inspection', 'qc'],
    response: 'Material Quality Support 🛡️\n\nQuality review is based on the agreed specification and available batch documents such as COA. Please share the material, grade and any required test parameters.'
  },
  {
    keywords: ['payment', 'pay', 'method', 'wire', 'bank', 'credit', 'terms', 'TT', 'LC'],
    response: 'Order Terms 💳\n\nPayment terms are confirmed clearly in the quotation and proforma invoice for each order. We keep order, QC, loading and document requirements aligned before shipment.'
  }
];

// Default fallback replies
const defaultReplies = [
  'Thank you for contacting Aurelia Pretty Ingredients. Ask us about material grades, samples, technical documents or sourcing.',
  'Hello! Share the ingredient or INCI, target application, quantity and destination market.',
  'Welcome to Aurelia Pretty Ingredients. How can we help with your raw-material sourcing brief?'
];

// Get AI response based on keywords
//根据用户消息关键词生成客服回复
function getAIResponse(userMessage) {
  const lowerMessage = userMessage.toLowerCase();

  for (const rule of keywordRules) {
    for (const keyword of rule.keywords) {
      if (lowerMessage.includes(keyword.toLowerCase())) {
        return { reply: rule.response, matchedKeyword: keyword };
      }
    }
  }

  // Random default reply
  const randomReply = defaultReplies[Math.floor(Math.random() * defaultReplies.length)];
  return { reply: randomReply, matchedKeyword: null };
}

// POST /api/support/chat - Send message and get AI reply
//接收客服消息并返回关键词匹配结果
router.post('/chat', authenticateToken, async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({ code: 400, message: 'Message cannot be empty' });
    }

    const userMessage = message.trim();
    const result = getAIResponse(userMessage);
    const timestamp = new Date().toISOString();
    const messageId = uuidv4();
    const isFirstChat = !db.list('supportMessages').some((item) => item.account === req.user.account);
    await db.upsert('supportMessages', messageId, {
      id: messageId, account: req.user.account, userMessage, aiReply: result.reply,
      matchedKeyword: result.matchedKeyword, createdAt: timestamp,
    });
    await db.recordVisitorEvent({
      visitorId: req.get('x-visitor-id'), account: req.user.account,
      eventType: 'support.chat_message', entityType: 'support_message', entityId: messageId
    });
    const contactChannels = detectContactChannels(userMessage);
    if (contactChannels.length) {
      void notifyContactDetailsShared({
        user: req.user,
        message: userMessage,
        channels: contactChannels,
        timestamp,
      });
    } else if (isFirstChat) {
      void notifyFirstRobotChat({
        user: req.user,
        message: userMessage,
        matchedKeyword: result.matchedKeyword,
        timestamp,
      });
    }

    res.json({
      code: 200,
      data: {
        userMessage,
        aiReply: result.reply,
        matchedKeyword: result.matchedKeyword,
        timestamp
      }
    });
  } catch (err) {
    res.status(500).json({ code: 500, message: 'Internal server error' });
  }
});

// GET /api/support/faq - Get frequently asked questions
//返回客服模块常见问题列表
router.get('/faq', (req, res) => {
  const faqFile = path.join(__dirname, '..', 'data', 'faqs.json');
  const faqs = JSON.parse(fs.readFileSync(faqFile, 'utf8'));
  res.json({
    code: 200,
    data: faqs.filter((faq) => faq.published !== false)
  });
});

module.exports = router;
