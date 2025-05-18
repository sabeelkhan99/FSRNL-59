import express from 'express';
const app = express();
// Routes
import productRoutes from './routes/product.js';

app.use(express.json());
app.use("/api/v1/products", productRoutes);

export default app;
