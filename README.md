# Curva Denim Wholesale

Curva Denim 是面向美国零售商的 B2B 大码女装牛仔独立站。网站服务于精品店、独立站零售商、专业大码连锁、百货/Marketplace 买手和分销商，核心产品尺码为美国女装 `14W–34W`。

当前系统围绕批发获客和 RFQ 工作流建设，不是 DTC 零售商城：

- 不提供公开零售价、消费者购物车或在线支付；
- 公共商品页展示款式方向、MOQ、尺码段、交期和开发说明；
- 合格买手可索取 Line Sheet、样品和商业报价；
- 登录买手可以组合多个款式并提交 Wholesale RFQ；
- 管理员和销售可管理产品、内容、FAQ、用户及客服会话。

## B2B 定位

- 市场：United States
- 用户：Boutiques、E-commerce Retailers、Specialty Chains、Department Stores、Distributors
- 首发组合：5 款 Jeans、3 款 Denim Skirts、2 款 Denim Jackets，共 10 款
- 尺码：14W–34W
- 典型 MOQ：牛仔裤约 120 pcs/style/color；半裙和外套约 150 pcs/style/color
- 典型生产期：PP Sample 批准后约 35–50 天，最终以订单为准
- 服务：Wholesale、Private Label、Inclusive Grading、Samples、Order-level QC、Export Coordination

所有 MOQ、交期和能力均为项目方向，不构成自动承诺。最终价格、产能、规格、付款、Incoterms 和交期以正式报价及 Proforma Invoice 为准。

## 技术栈

- React 18、React Router、Vite、Tailwind CSS
- Node.js、Express、WebSocket
- MySQL 用户数据存储 + JSON 内容数据存储
- JWT、bcryptjs
- Nodemailer SMTP 通知
- SSR 预渲染、Meta、JSON-LD、sitemap 和 robots

## 运行

```bash
npm run install:all
npm run dev:server
npm run dev
```

- 前端开发地址：`http://localhost:5173/`
- 后端：`http://localhost:3001/`
- WebSocket：`ws://localhost:3001/ws`

生产构建：

```bash
npm run build
npm run preview
```

## 主要页面

- `/`：B2B 首页、供应能力、商业款式和采购流程
- `/products`：Wholesale Collection
- `/products/:slug`：MOQ、交期、尺码段、规格、报价/样品入口
- `/services/wholesale-private-label`：批发与贴牌流程
- `/services/fit-and-size-guide`：Fit、Grading 和 Size Curve
- `/services/quality-and-care`：订单级 QC 与交付控制
- `/about`：供应合作模式
- `/news-blog/`：美国零售买手资源
- `/faq`：Buyer Qualification、MOQ、价格、样品、生产、QC 和运输
- `/contact`：公共 Buyer Inquiry / Line Sheet 表单
- `/login`：买手账户登录或注册
- `/quote`：登录后的多款式 RFQ 工作区
- `/admin/*`：管理后台
- `/support/inbox`：销售客服工作区

## Buyer Inquiry 数据

公共询盘 `/api/quotes/public` 收集：

- Buyer name、Company、Business email、Phone/WhatsApp
- Business type、Sales channels、Website
- Target retail price、Estimated annual denim units
- Program interest、Opening units
- Destination、Target delivery window
- Styles、Sizes、Washes、Fit、Private Label 和包装要求

提交成功后生成 `WEB-YYYYMMDD-XXXXXX` 编号，保存到 MySQL `quotes` 表。配置 SMTP 后同步通知管理员。

## 产品数据

`server/data/products.json` 主要字段：

- `id`、`name`、`category`、`image`
- `description`、`specs`、`applications`
- `sizes`、`wash`、`badge`
- `moq`、`leadTime`
- `price`：当前保持 `0`，因为公开站点不展示未经确认的批发价
- `stock`：现阶段为后台兼容字段，不代表实时可售库存

当前首发商品固定为：

- Everyday Curve Straight Jean
- Cloud Wash Wide-Leg Jean
- Studio High-Rise Flare Jean
- City Curve Slim Bootcut Jean
- Weekend Curve Barrel Jean
- Market Day A-Line Denim Skirt
- Free Line Denim Maxi Skirt
- Workday Stretch Denim Pencil Skirt
- Soft Structure Denim Jacket
- Curve Balance Cropped Denim Jacket

## 数据存储边界

- MySQL：用户账号与资料、登录/注册等用户行为、RFQ 选品、询盘、客服会话和即时沟通；
- JSON：`server/data/products.json`、`server/data/faqs.json`、`server/data/articles.json`；
- SQL 中不建立产品、FAQ 或文章表，避免内容维护出现双数据源。

安装数据库结构并迁移已有用户相关 JSON 数据：

```bash
cd server
npm run db:install
npm run db:migrate-users
```

首次部署时，数据库管理员可先执行 `server/sql/create.sql` 创建数据库和项目运行账号，再使用该账号执行上述命令。

迁移脚本不会导入或修改产品、FAQ 和文章 JSON。

## 环境变量

```env
VITE_SITE_URL=https://www.curvadenim.com
LARK_NOTIFICATIONS_ENABLED=true
LARK_WEBHOOK_URL=https://open.larksuite.com/open-apis/bot/v2/hook/replace-with-your-webhook-id
LARK_WEBHOOK_SECRET=replace-with-your-signing-secret
LARK_REQUEST_TIMEOUT_MS=8000
JWT_SECRET=strong-development-or-production-secret
DB_HOST=127.0.0.1
DB_PORT=3306
DB_NAME=curva_denim_b2b
DB_USER=app-user
DB_PASSWORD=strong-database-password
```

不要提交真实密钥。未配置 Lark Webhook 时，询盘仍会保存，但不会发送群通知。公开询价、登录用户 RFQ、人工客服请求和每个客服会话的首次客户消息会通知 Lark；普通机器人聊天不会逐条通知。

## 固定管理员

管理员账号配置在 `server/config/admin.js`。服务启动时会自动创建或校验该账号，保证工程内配置的固定密码生效。

- Username: `admin`
- Password: `CurvaAdmin@2026`

## 当前边界

- 尚未接入 ERP、实时面辅料、产能或库存；
- 尚未实现样品付款、PO、PI 签署和在线批发支付；
- 产品、FAQ 和文章继续使用 JSON，适合当前内容规模；用户与询盘数据使用 MySQL；
- 上线前需要正式公司信息、隐私政策、B2B 条款、Claims Policy、Importer/Compliance 分工和真实产品资料。

## 视觉资产

当前美妆视觉位于 `client/public/beauty/`，包含品牌主视觉、8 个 SKU 的独立产品主图、配方或包装细节图与品类场景图。正式生产前应以确认后的配方、包材、标签和实物样品照片替换概念视觉。
