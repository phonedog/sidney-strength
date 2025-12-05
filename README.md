# Sidney Strength · Powerlifting Log

面向力量举训练记录的单页站点，使用 React + TypeScript + Vite + Tailwind CSS 构建。页面包含个人 PR、训练笔记/图片/视频流，以及按周的训练摘要，适合快速分享或自我复盘。

## 功能
- 概览 Hero：展示姓名、身高/体重以及 S/B/D 个人纪录（来自 `src/data.ts`）。
- 卡片流：支持 `note | photo | video` 三种类型，内含时间、标签与描述；视频卡片可嵌入 YouTube/Bilibili，图片使用可替换的 URL。
- 周训练摘要：按周列出训练重点与小结，方便滚动回顾。
- 设计：玻璃拟态卡片、渐变背景、响应式布局（桌面到移动）。
- 顶部导航：锚点跳转到主页、记录、视频与数据区块。

## 快速开始
1) 环境：建议 Node.js 18+，包管理器使用 `npm`。  
2) 安装依赖：
```powershell
npm install
```
3) 启动开发服务器（默认端口 `5173`）：
```powershell
npm run dev
```
4) 生产构建与预览：
```powershell
npm run build
npm run preview
```

## 数据与配置
- `src/data.ts`
  - `profile`: 姓名/项目、三大项 PR、身高/体重。
  - `cards`: 训练笔记/图片/视频条目。`type` 决定渲染方式；`videoUrl` 可填嵌入链接（YouTube embed 或 B 站 `player` 地址）；`imageUrl` 用于展示封面；`description` 为可选补充文字。
  - `trainingWeeks`: 周次、训练重点与摘要。
- `src/types.ts`: 卡片类型定义。
- 文案或示例内容可直接在上述数据文件中替换；若添加更多卡片类型，需同步更新 `Card` 组件。

## 目录结构（关键文件）
- `index.html`：Vite 入口模板。
- `src/main.tsx`：React 入口挂载。
- `src/App.tsx`：页面布局组合 Hero、卡片流和数据区块。
- `src/components/`：Header、Hero、Card、StatsSection、Layout、Footer 等 UI 组件。
- `src/index.css`：全局样式与 Tailwind 调用。
- `tailwind.config.cjs` / `postcss.config.cjs`：样式工具链配置。

## 部署
- `npm run build` 会生成 `dist/`，可部署到任意静态托管（如 GitHub Pages、Vercel 静态站点、自建 Nginx）。
- 若部署到带有子路径的环境，需根据需要调整 `base`（`vite.config.ts`）。

## TODO/改进想法
- 为卡片添加过滤/搜索与标签筛选。
- 引入表单或 CMS 以替代静态数据文件（例如将数据迁移到后端或 Headless CMS）。
- 增加深色/浅色切换，以及多语言文案。 
