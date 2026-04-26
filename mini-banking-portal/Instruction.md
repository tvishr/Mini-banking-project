# Banking Portal — API Setup Guide

A step-by-step guide to scaffold and integrate a local Express API with your React Vite app.

---

## Prerequisites

Ensure the following are installed before starting:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Yarn](https://yarnpkg.com/)
- [VS Code](https://code.visualstudio.com/)

---

## Project Structure

Your root folder should look like this before you begin:

```
my-banking-app/
├── client/        ← existing React Vite app
└── server/        ← API (created in this guide)
```

---

## Step 1 — Scaffold the Server

Open a **new terminal** in VS Code (`Ctrl + `` ` ```) and run from your **root** folder:

```bash
mkdir server
cd server
yarn init -y
```

---

## Step 2 — Install Dependencies

From inside `server/`, run:

```bash
yarn add express cors dotenv jsonwebtoken bcryptjs helmet express-rate-limit
```

```bash
yarn add -D typescript @types/express @types/node ts-node nodemon
```

---

## Step 3 — Add TypeScript Config

Create `server/tsconfig.json` and paste in:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "rootDir": "src",
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true
  }
}
```

---

## Step 4 — Add Scripts to `server/package.json`

Open `server/package.json` and add the `scripts` block:

```json
{
  "scripts": {
    "dev": "nodemon --exec ts-node src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js"
  }
}
```

---

## Step 5 — Create the API Entry Point

Create the following folders and file:

```
server/
└── src/
    ├── routes/       ← empty for now
    └── index.ts      ← create this file
```

Paste the following into `server/src/index.ts`:

```typescript
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(helmet());
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

// Health check — test this route first
app.get('/api/health', (req, res) => {
  res.json({ status: 'API is running' });
});

// Uncomment as you build each route:
// app.use('/api/auth', authRoutes);
// app.use('/api/accounts', accountRoutes);
// app.use('/api/transactions', transactionRoutes);

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
```

---

## Step 6 — Proxy API Calls in Vite

Open `client/vite.config.ts` and add the `server.proxy` block:

```typescript
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      }
    }
  }
});
```

> This means any call to `/api/...` from your React app is automatically forwarded to your Express server during development — no CORS issues.

---

## Step 7 — Set Up the Root `package.json`

Navigate back to your **root** folder:

```bash
cd ..
yarn init -y
yarn add -D concurrently
```

Open the root `package.json` and add:

```json
{
  "scripts": {
    "dev": "concurrently \"yarn --cwd client dev\" \"yarn --cwd server dev\""
  }
}
```

---

## Step 8 — Run Both Apps

From your **root** folder:

```bash
yarn dev
```

| App | URL |
|---|---|
| React frontend | http://localhost:5173 |
| Express API | http://localhost:3001 |

---

## Step 9 — Verify the API is Working

Open your browser and visit:

```
http://localhost:3001/api/health
```

You should see:

```json
{ "status": "API is running" }
```

Your API is live and connected to your React app.

---

## Next Steps

| Task | What to build |
|---|---|
| Auth | `server/src/routes/auth.ts` — login, JWT token |
| Accounts | `server/src/routes/accounts.ts` — return balances |
| Database | Connect Azure SQL using Prisma ORM |
| Deploy | Azure Static Web Apps (frontend) + Azure App Service F1 free tier (API) |

---

## Azure Deployment (Free Tier)

| Service | Free Tier | Purpose |
|---|---|---|
| Azure Static Web Apps | Free forever | Host React frontend |
| Azure App Service (F1) | Free forever | Host Express API |
| Azure SQL Database | 32GB free (12 months) | Banking data |

For deployment, run `yarn build` in both `client/` and `server/` before pushing to Azure.
