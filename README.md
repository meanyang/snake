This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Project Introduction
This is a Snake game project built with Next.js. Players can enter their names to start the game, and their scores will be saved to a PostgreSQL database upon game over. The project uses Tailwind CSS for styling and integrates several UI component libraries.

## Features
- Enter player name to start the game
- Classic Snake gameplay with keyboard controls
- Automatic collision and food collection detection
- Automatically save scores to the database after the game ends
- Display game scores and restart functionality

## Tech Stack
- **Framework**: Next.js 15.4.2
- **Front - end**: React 19.1.0, Tailwind CSS
- **Back - end**: PostgreSQL database

## Project Structure

## Quick Start

### Install Dependencies
```bash
npm install
# Or use other package managers
yarn install
pnpm install
bun install
```

### Run the Development Server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Database Configuration
Create a .env.local file in the project root directory and add the following database configuration information:


```plaintext
DB_USER=your_db_user
DB_HOST=your_db_host
DB_NAME=your_db_name
DB_PASSWORD=your_db_password
DB_PORT=your_db_port
```
Replace your_db_user, your_db_host, etc., with your actual database information.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
