import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import orderRoutes from './routes/order.route.js';
import membershipRoutes from './routes/membership.route.js';
import categoryAndProductInsightsRoutes from './routes/category_and_product_insights.route.js';
import salesAndOrderTrendsRoutes from './routes/sales_and_order_trends.route.js';
import customerBehaviourRoutes from './routes/customer_behaviour.route.js';

const app = express();

app.use(cors(
    {
        origin: process.env.FRONTEND_URL,
        credentials: true,
    }
));

app.use(express.json(
    {
        limit: "16kb",
    }
));

app.use(express.urlencoded(
    {
        extended: true,
        limit: "16kb",
        extended: true,
    }
));

app.use(express.static("public"));
app.use(cookieParser());

// routes
app.use('/api', orderRoutes);
app.use('/api/membership', membershipRoutes);
app.use('/api/category-and-product-insights', categoryAndProductInsightsRoutes);
app.use('/api/sales-and-order-trends', salesAndOrderTrendsRoutes);
app.use('/api/customer-behaviour', customerBehaviourRoutes);


export { app }