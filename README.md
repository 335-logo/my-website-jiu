# 玖玖组合 - 网站部署指南

## 项目概述

这是一个基于HTML、CSS和JavaScript的响应式网站模板，复刻了目标网站的UI结构与交互功能，包含以下文件：

- `index.html` - 主页面
- `detail.html` - 内容详情页
- `user.html` - 登录页面
- `css/style.css` - 样式文件
- `js/script.js` - JavaScript功能

## 部署指南

### 选项1：GitHub Pages部署

1. **登录GitHub**，进入你的仓库
2. 点击顶部导航栏的 **Settings**
3. 在左侧菜单中找到 **Pages**
4. 在 **Source** 部分：
   - 选择 **Branch**: `main` 或 `master`
   - 选择 **Folder**: `/ (root)`
   - 点击 **Save**
5. 等待几分钟，GitHub将为你生成访问链接，通常格式为：
   `https://your-username.github.io/your-repo-name/`

### 选项2：Vercel部署

1. **登录Vercel**（https://vercel.com/）
2. 点击右上角的 **Add New Project**
3. 选择 **Import Git Repository**
4. 连接你的GitHub仓库
5. 在 **Configure Project** 页面：
   - Framework Preset: 选择 **Other**
   - Build Command: 留空
   - Output Directory: 留空
6. 点击 **Deploy**
7. 部署完成后，Vercel将提供一个类似 `your-project.vercel.app` 的域名

### 手动部署步骤

如果Git命令不可用，你可以使用以下手动方法部署到GitHub：

1. **访问GitHub仓库**：打开浏览器，登录GitHub，进入你的仓库
2. **上传文件**：
   - 点击仓库页面的 **Add file** 按钮
   - 选择 **Upload files**
   - 拖动或选择项目中的所有文件和文件夹（index.html, detail.html, user.html, css/, js/）
3. **提交更改**：
   - 在页面底部填写提交信息
   - 点击 **Commit changes**
4. **启用GitHub Pages**：按照上面的GitHub Pages部署步骤操作

## 项目特点

- ✅ 响应式设计，适配PC和移动设备
- ✅ 清晰的UI结构
- ✅ 标签筛选功能
- ✅ 加载更多功能
- ✅ 搜索功能
- ✅ 登录页面
- ✅ 详情页模板

## 自定义内容

### 替换Logo

1. 打开 `index.html`
2. 找到 `<div class="logo">` 部分
3. 修改 `<a href="index.html" title="玖玖组合" class="logo-text">玖</a>` 中的文字

### 添加真实内容

1. 打开 `js/script.js`
2. 找到 `cardDataTemplate` 对象，替换为你的真实数据
3. 使用 `fillContent()` 函数填充内容

### 修改样式

1. 打开 `css/style.css`
2. 修改CSS变量（在 `:root` 部分）来自定义主题颜色
3. 根据需要调整其他样式

## 技术栈

- HTML5
- CSS3
- JavaScript (Vanilla)
- Font Awesome 图标库

## 浏览器兼容性

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 许可证

MIT License
