# 贪吃蛇游戏

[English Documentation](README.md) | [中文文档](README.zh-CN.md)

[English Documentation](README.md) | [中文文档](README.zh-CN.md)

## 项目介绍

## 核心功能 🎮
- 🧑💻 玩家姓名输入注册
- 🐍 经典键盘操控玩法
- ⚡ 自动碰撞/食物检测
- 💾 分数自动保存至数据库
- 🔄 实时分数显示与重启功能

## 功能特性
- 输入玩家姓名开始游戏
- 经典键盘操控贪吃蛇
- 自动碰撞检测与食物收集
- 游戏结束自动保存得分至数据库
- 显示历史得分与重启功能

## 技术架构 ⚙️
- **框架**: Next.js
- **前端**: React + Tailwind CSS
- **数据库**: PostgreSQL

## 快速开始

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000)

### 数据库配置
创建.env.local文件并添加：
```plaintext
DB_USER=你的数据库用户
DB_HOST=数据库地址
DB_NAME=数据库名称
DB_PASSWORD=密码
DB_PORT=端口
```

## 部署
项目部署链接: https://snake.19900128.xyz