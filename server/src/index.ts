import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const NODE_ENV = process.env.NODE_ENV || 'development';

// Allow both local dev and Azure deployment URLs
const allowedOrigins: string[] = [
  'http://localhost:5173',
  'http://localhost:3000',
];

if (process.env.FRONTEND_URL) {
  allowedOrigins.push(process.env.FRONTEND_URL);
}

app.use(helmet());
app.use(cors({ 
  origin: allowedOrigins,
  credentials: true
}));
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
