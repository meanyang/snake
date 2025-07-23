# Snake Game


[中文文档](README.zh-CN.md) | [English Documentation](README.md)

## Project Introduction
This is a Snake game project built with Next.js. Players can enter their names to start the game, and their scores will be saved to a PostgreSQL database upon game over. The project uses Tailwind CSS for styling and integrates several UI component libraries.

## Core Features 🎮
- 🧑💻 Player registration with name input
- 🐍 Classic keyboard-controlled snake gameplay
- ⚡ Automatic collision/food detection
- 💾 Score autosave to PostgreSQL database
- 🔄 Live score display & restart capability

## Technology Stack
- **Framework**: Next.js 15.4.2
- **Frontend**: React 19.1.0, Tailwind CSS
- **Database**: PostgreSQL

## Quick Start 🚀

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Database Setup 🔐
Create `.env.local` with your PostgreSQL credentials:

```
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=your_db_host
DB_PORT=your_db_port
DB_NAME=your_db_name
```
Replace your_db_user, your_db_host, etc., with your actual database information.

## Deployment
Here is the deployment link: https://snake.19900128.xyz