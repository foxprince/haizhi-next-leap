# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/073254dc-b311-4960-b234-8b4c4d8f8f4f

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/073254dc-b311-4960-b234-8b4c4d8f8f4f) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/073254dc-b311-4960-b234-8b4c4d8f8f4f) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## 使用 GitHub Pages 部署与绑定自定义域名（Vite + React）

本项目基于 Vite + React，已内置 GitHub Actions 工作流与 CNAME 文件，便于发布到 GitHub Pages 并绑定自定义域名 `www.haizhijingit.com`。

### 目录与文件

- 工作流文件：`.github/workflows/deploy.yml`
- 自定义域名：`public/CNAME`（内容：`www.haizhijingit.com`）

### 部署步骤

1. 在 GitHub 创建仓库并推送代码（建议默认分支为 `main`）。
2. 打开仓库 Settings > Pages：
   - Source 选择 "GitHub Actions"。
3. 首次推送到 `main` 后，Actions 会自动执行构建与发布：
   - 使用 Node 20 安装依赖与运行 `npm run build` 生成 `dist/`。
   - 将 `dist/index.html` 复制为 `dist/404.html`，用于 SPA 深链接回退。
   - 通过 `actions/deploy-pages` 发布到 GitHub Pages。
4. DNS 设置（在域名服务商处配置）：
   - 添加 CNAME 记录：主机名 `www` 指向 `<你的 GitHub 用户名>.github.io`。
   - 等待 DNS 生效（通常数分钟到 24 小时）。
5. 在仓库 Settings > Pages > Custom domain 输入 `www.haizhijingit.com` 并保存（勾选 Enforce HTTPS）。

### 重要说明

- 本项目未设置 `vite.config.ts` 的 `base`，默认 `/`，在绑定自定义域名的场景下是正确的配置。
- 如果改为项目路径发布（例如 `https://<user>.github.io/<repo>/` 且不使用自定义域名），需将 `vite.config.ts` 设置为 `base: "/<repo>/"`。
- 若使用 React Router 的 BrowserRouter，GitHub Pages 直接访问子路径会返回 404。为此工作流已自动将 `index.html` 复制为 `404.html`，从而在 Pages 层面回退到 SPA 入口。

### 本地开发与构建

```sh
npm i
npm run dev   # 本地开发
npm run build # 产物输出到 dist/
```

测试部署