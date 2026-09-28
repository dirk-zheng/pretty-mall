# Aurelia Beauty B2B

Aurelia Beauty 是面向零售商、分销商、精品店、电商渠道与品牌合作方的美妆 B2B 项目。首发系列包含 8 款护肤、彩妆与身体香氛产品，网站以产品展示、样品申请、合作询盘和 RFQ 为核心，不提供面向消费者的购物车或在线支付。

## 项目定位

- 品类：Skincare、Makeup、Body & Fragrance
- 客户：Retailer、E-commerce、Distributor、Hospitality、Corporate Gifting、Private-label Partner
- 首发组合：3 款护肤、3 款彩妆、2 款身体与香氛产品
- 合作方式：批发、联名礼赠、定制包装与 Private Label
- 商务信息：按 SKU 或色号标注参考 MOQ 与生产周期，最终以样品、规格和正式报价为准

## 技术栈

- React 18、React Router、Vite、Tailwind CSS
- Node.js、Express、WebSocket
- MySQL 用户与询盘数据 + JSON 内容数据
- JWT、bcryptjs、Nodemailer
- 预渲染、Meta、JSON-LD、sitemap 和 robots

## 本地运行

```bash
npm run install:all
npm run dev:server
npm run dev
```

- 前端：`http://localhost:5173/`
- 后端：`http://localhost:3001/`
- WebSocket：`ws://localhost:3001/ws`

生产构建：

```bash
npm run build
npm run preview
```

## 主要页面

- `/`：品牌与 B2B 合作入口
- `/products`：8 款美妆产品系列
- `/products/:slug`：配方亮点、规格、MOQ、周期、图库与样品/报价入口
- `/services/wholesale-private-label`：批发与贴牌合作
- `/services/skin-ritual`：护肤仪式与选品思路
- `/services/quality-and-care`：配方、包材和质量控制
- `/about`：品牌与合作模式
- `/news-blog/`：美妆内容与合作方资源
- `/faq`：样品、MOQ、定制、生产与交付常见问题
- `/contact`：合作询盘
- `/login`：合作方账户
- `/quote`：登录后的多产品 RFQ 工作区
- `/admin/*`：管理后台
- `/support/inbox`：合作咨询工作台

## 产品数据

`server/data/products.json` 的主要字段：

- `id`、`name`、`category`
- `image`、`gallery`
- `description`、`specs`、`applications`
- `sizes`（净含量或包装规格）、`benefit`、`badge`
- `moq`、`leadTime`
- `price`、`stock`：后台兼容字段，公开 B2B 页面不展示零售价或实时库存

首发 8 款产品：

1. Golden Dew Barrier Serum
2. Cloud Veil Ceramide Cream
3. Pearl Light Milky Essence
4. Petal Satin Lip Color
5. Soft Bloom Powder Blush
6. Second Skin Luminous Tint
7. Quiet Bloom Eau de Parfum
8. Amber Silk Body Ritual

每款产品拥有独立主图和细节图，并按品类补充场景图。概念视觉位于 `client/public/beauty/`，正式上线前应使用经确认的配方、包材、标签和实物样品照片替换或复核。

## 数据存储

- MySQL：账号、资料、RFQ、询盘、客服会话和即时沟通
- JSON：产品、FAQ 和文章内容

安装数据库结构并迁移已有用户数据：

```bash
cd server
npm run db:install
npm run db:migrate-users
```

数据库默认名称与运行账号仍沿用历史兼容标识，避免现有环境在未迁移时断连。新环境可通过 `DB_NAME`、`DB_USER` 和 `DB_PASSWORD` 覆盖；如需彻底改名，应先完成数据库迁移和凭据轮换。

## 环境变量

```env
VITE_SITE_URL=https://www.aureliabeauty.com
SITE_URL=https://www.aureliabeauty.com
JWT_SECRET=replace-with-a-strong-secret
DB_HOST=127.0.0.1
DB_PORT=3306
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
LARK_NOTIFICATIONS_ENABLED=true
LARK_WEBHOOK_URL=https://open.larksuite.com/open-apis/bot/v2/hook/replace-with-your-webhook-id
LARK_WEBHOOK_SECRET=replace-with-your-signing-secret
```

不要提交真实密钥。未配置通知渠道时，询盘仍会保存，但不会发送群通知。

## 管理员与上线边界

管理员账号配置在 `server/config/admin.js`，服务启动时会创建或校验该账号。正式部署前应使用环境化配置或密钥管理替换演示凭据。

当前尚未接入 ERP、实时产能、实时库存、样品付款、PO/PI 签署或在线批发支付。上线前还需确认公司主体、隐私与 B2B 条款、成分表、标签规范、宣称依据、测试资料、运输限制及进口合规责任。
