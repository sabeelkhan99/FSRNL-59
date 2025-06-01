import express from 'express';
const app = express();
import cors from 'cors';

// Routes
import productRoutes from './routes/product.js';
import reviewRoutes from './routes/review.js';
import authRoutes from './routes/auth.js';

app.use(cors({
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST', 'PATCH', 'DELETE']
}));
app.use(express.json());
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/products", reviewRoutes);
app.use("/api/v1/auth", authRoutes);

// app.all('*', (req, res, next) => next(new NotFoundError()));

// Global Exception handler
app.use((err, req, res, next) => {
    const { message = 'Something went wrong', status = 500 } = err;
    res.status(status).json({ message });
});

export default app;
