# Aurelia Pretty Ingredients

Aurelia Pretty 是面向化妆品品牌、配方实验室和生产企业的原料目录与 B2B 询盘项目。网站展示原料用途、基础规格和应用方向，支持技术资料、样品与采购需求咨询；不提供消费者零售购物车或在线支付。

## 产品目录

当前目录共 17 个原料项目，分为：

- 活性成分：透明质酸、烟酰胺、稳定型维生素 C、神经酰胺复配物
- 植物提取物与油脂：积雪草、绿茶、霍霍巴油、角鲨烷
- 配方基础原料：乳化蜡、防腐复配物、化妆品色粉、表面活性剂基料
- 表面活性剂：5 款既有产品图对应的原料，包括 SLS、SLES、AOS、Cocamide MEA 和 Sodium Lauroyl Sarcosinate；具体化妆品适用性须按等级与目标市场法规确认

产品图片使用项目中已有的本地素材：AI 生成的原料概念图位于 `client/public/ingredient-images/`，既有表面活性剂产品图位于 `client/public/surfactant-images/`。图片仅作目录识别与概念展示，正式商用前应确认授权、替换为供应商授权素材，并以供应商文件确认等级、组成和质量指标。AI 图不代表真实原料外观或检测结果。

产品数据位于 `server/data/products.json`；前端分类及显示配置位于 `client/src/data/products.js`。后台仅允许四个原料分类：`active-ingredients`、`botanical-extracts`、`formulation-essentials`、`surfactants`。

## 技术栈

- React 18、React Router、Vite、Tailwind CSS
- Node.js、Express、WebSocket
- MySQL 用户与询盘数据 + JSON 内容数据
- JWT、bcryptjs、Nodemailer
- 预渲染、Meta、JSON-LD、sitemap 和 robots

## 本地运行

    npm run install:all
    npm run dev:server
    npm run dev

前端默认 `http://localhost:5173/`，后端默认 `http://localhost:3001/`，WebSocket 为 `ws://localhost:3001/ws`。

生产构建：

    npm run build
    npm run preview

Ubuntu 部署请参阅 [DEPLOY-UBUNTU.md](./DEPLOY-UBUNTU.md)。

## 主要页面

- `/`：原料采购与配方支持入口
- `/products`：化妆品原料目录及筛选
- `/products/:slug`：原料图片、描述、规格摘要、用途和询价入口
- `/services/wholesale-private-label`：原料采购与供应合作
- `/services/skin-ritual`：配方支持（保留历史 URL）
- `/services/quality-and-care`：技术资料与质量支持
- `/news-blog/`：原料与配方技术内容
- `/faq`：采购、样品、规格和文件相关问题
- `/contact`：原料采购询盘
- `/quote`：多原料 RFQ 工作区
- `/admin/*`：目录和内容管理后台
- `/support/inbox`：咨询工作台

## 商务与合规边界

MOQ、价格、等级、供货状态、交期、运输分类及技术文件均以供应商书面资料和正式报价为准。不得将概念图或目录摘要视为 COA、SDS、功效证明或法规结论。特别是清洁用途表面活性剂，不应默认描述为可用于化妆品；须核实具体 INCI、等级、配方用途及目标市场法规。
