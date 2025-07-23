This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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
- **Framework**: Next.js
- **Frontend**: React + Tailwind CSS
- **Database**: PostgreSQL

## Project Structure

## Quick Start 🚀

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to start playing!

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Database Setup 🔐
Create `.env.local` with your PostgreSQL credentials:

```
DB_USER=your_username
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=snake_game
```
Replace your_db_user, your_db_host, etc., with your actual database information.

## Deployment
Here is the deployment link: https://snake.19900128.xyz