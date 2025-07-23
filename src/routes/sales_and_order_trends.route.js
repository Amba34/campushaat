import { Router } from 'express';
import {
  getTotalOrdersPerMonth,
  getTotalRevenuePerMonth,
  getAverageOrderValuePerBuyer,
  getTop10SellingProductsByQuantity,
  getHighValueBuyers
} from '../controllers/sales_and_order_trends.controller.js';

const router = Router();

router.get('/total-orders-per-month', getTotalOrdersPerMonth);
router.get('/total-revenue-per-month', getTotalRevenuePerMonth);
router.get('/average-order-value-per-buyer', getAverageOrderValuePerBuyer);
router.get('/top-10-selling-products-by-quantity', getTop10SellingProductsByQuantity);
router.get('/high-value-buyers', getHighValueBuyers);

export default router; 