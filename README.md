# Sidney Strength · 力量举训练记录

个人训练展示站点，记录力量举（Powerlifting）的训练笔记、照片与视频示例。该项目使用 React + TypeScript + Vite + Tailwind CSS 构建，界面以深色主题为主，适合作为个人档案页或训练日志展示页的起点。

## 功能亮点
- 单页应用（SPA）：主页面包含 Hero、卡片流（笔记/照片/视频）和训练数据总览。
- 卡片组件：统一支持 `note | photo | video` 三种类型，带标签/日期/缩略显示。
- 响应式布局：桌面 3 列、平板 2 列、移动 1 列。
- 深色渐变背景、圆角卡片、平滑 hover 动效。

## 技术栈
- Vite
- React 18 + TypeScript
- Tailwind CSS

## 本地运行
在项目根目录下运行：
```powershell
npm install
npm run dev
```
浏览器打开 `http://localhost:5173`（Vite 会打印具体地址）。

## 项目结构（简要）
- `index.html` - 应用入口（已默认暗色主题）
- `src/main.tsx` - React 挂载点
- `src/App.tsx` - 页面组合
- `src/components/*` - 可复用组件（Header/Hero/Card/Stats/Footer）
- `src/data.ts` - 硬编码的示例数据（`profile`, `cards`, `trainingWeeks`）
- `src/types.ts` - TypeScript 类型定义

## 示例数据说明
- 所有示例文案以中文为主，包含真实训练风格的笔记（RPE、组数、感受）与示例视频/图片占位链接。

## 更新说明（Changelog）
- 2025-12-05: 初始化项目并推送到 GitHub（Repository: `phonedog/sidney-strength`）。
- 2025-12-05: 添加 `README.md`，包含运行说明与项目概要（本次更新）。

## 许可 & 免责声明
个人训练记录展示站点，非商业用途。内容仅作个人记录与展示之用，不构成专业训练或医疗建议。

---
如果你要我：
- 添加 `README` 的中文/英文双语版本；
- 配置 GitHub Pages 或添加一个简单的 CI（GitHub Actions）用于构建预览；
- 或添加 `README` 中的截图与部署步骤；

告诉我你想要的下一步，我来继续实现。
