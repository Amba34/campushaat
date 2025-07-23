import { Router } from 'express';
import {
  getOrderByYear,
  getProductsWithHighestPrepTime,
  getCampusWiseMonthlyRevenue,
  getMostOrderedProductsInEachCategory
} from '../controllers/category_and_product_insights.controller.js';

const router = Router();

router.get('/order-by-year', getOrderByYear);
router.get('/products-with-highest-prep-time', getProductsWithHighestPrepTime);
router.get('/campus-wise-monthly-revenue', getCampusWiseMonthlyRevenue);
router.get('/most-ordered-products-in-each-category', getMostOrderedProductsInEachCategory);

export default router; 