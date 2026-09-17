# Aurelia Beauty B2B 产品规格

## 1. 产品目标

建立面向零售商、分销商、电商渠道、酒店礼赠与品牌合作方的美妆 B2B 网站，以产品评估、样品申请、合作询盘和多 SKU RFQ 为核心转化。

系统不服务消费者直接购买：不显示公开零售价，不提供消费者购物车、促销倒计时、免邮或零售退货承诺。

## 2. 用户与价值

外部用户包括 Retailer、E-commerce Buyer、Distributor、Hospitality / Gifting Buyer 和 Private-label Partner；内部用户包括 Seller 与 Admin。

核心价值：

- 护肤、彩妆、身体与香氛的精简首发组合
- 每款产品独立主图、细节图和品类场景图
- 清晰展示净含量、配方亮点、典型 MOQ 和生产周期
- 支持批发、样品、定制包装和 Private Label 沟通
- 收集目标市场、渠道、数量、包装、合规和交付要求

## 3. 商品模型

合法分类：`skincare`、`makeup`、`body-fragrance`。

首发商品固定为 8 款：

1. Golden Dew Barrier Serum
2. Cloud Veil Ceramide Cream
3. Pearl Light Milky Essence
4. Petal Satin Lip Color
5. Soft Bloom Powder Blush
6. Second Skin Luminous Tint
7. Quiet Bloom Eau de Parfum
8. Amber Silk Body Ritual

公开商品页展示：名称、品类、主图与图库、产品说明、核心功效、净含量、配方或包装规格、使用方式、典型 MOQ、典型生产周期以及报价和样品入口。

`price` 和 `stock` 仅作为后台兼容字段；在没有正式商业条款前，公开页面与 Product JSON-LD 不输出零售价、库存或 Offer。

## 4. 转化流程

### 公共合作询盘

无需登录即可提交联系人、公司、商务邮箱、业务类型、销售渠道、网站、目标市场、感兴趣产品、预计数量、包装或贴牌要求、目标交付窗口和补充说明。

表单只创建合作线索，不创建 PO，也不保证价格、产能、合规状态或交期。

### 登录 RFQ

1. 合作方登录；
2. 从商品详情添加多个产品；
3. 填写各 SKU 或色号的参考数量；
4. 补充渠道、市场、包装、标签、配方偏好、合规与交付要求；
5. 提交后生成 RFQ 编号，由商务团队确认后续样品和报价。

## 5. 内容体系

- Wholesale & Private Label：合作、打样、包材、订单与交付
- Skin Ritual：护肤步骤、成分搭配和系列选品
- Formula, Quality & Care：稳定性、包材相容性、标签、批次与质量控制
- Beauty Journal：护肤、现代彩妆、香氛与渠道合作内容
- FAQ：资格、样品、MOQ、报价、定制、生产、质量、运输与合规

## 6. B2B 合规表达

- MOQ 和周期使用 “Typical”“Indicative”“Subject to confirmation”等限定语；
- 成分、功效、测试、认证、纯素、可持续性和产地宣称必须有资料支持；
- INCI、标签语言、过敏原、香精限制、运输条件和市场准入责任需在订单中确认；
- 网站图片为概念视觉时应明确标注，不能替代确认样、签样或最终包材标准；
- 进口商、税费、清关和目的地监管责任以合同与正式订单为准。

## 7. 权限与 SEO

- 公开：首页、产品、详情、服务、关于、Journal、FAQ、Contact
- 登录合作方：RFQ Workspace、Conversation History
- Seller/Admin：Support Inbox
- Admin：产品、用户、角色、内容和 FAQ

私有页面必须 `noindex`。商品结构化数据使用 `BusinessAudience` 与业务属性，不输出未经确认的价格 Offer。

## 8. 验收标准

- 公开页面无牛仔、服装尺码、面料水洗等旧项目文案；
- 全站明确为美妆 B2B 合作项目，不出现消费者结账路径；
- Collection 仅呈现 8 款首发产品及 3/3/2 品类结构；
- 每款产品拥有独立主图和详情图，资源路径有效；
- 商品卡与详情展示净含量、核心功效、MOQ、周期和合作 CTA；
- FAQ、文章、服务与客服知识均围绕美妆采购和合作；
- 构建、预渲染、JSON 和服务端语法检查通过。
