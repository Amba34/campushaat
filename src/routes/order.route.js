import { Router } from 'express';
import {
  getOrdersByYear,
  getOrdersByMonth,
  getOrdersCreatedByHour,
  getOrdersDeliveredByHour,
  getAvgTimeCreateToPickup,
  getAvgTimePickupToDispatch,
  getAvgTimeDispatchToDelivery,
  getAvgTimeCreateToDelivery,
  getLatePickups
} from '../controllers/order.controller.js';

const router = Router();

// GET /orders/by-year
router.get('/orders/by-year', getOrdersByYear);
// GET /orders/by-month
router.get('/orders/by-month', getOrdersByMonth);
// GET /orders/created-by-hour
router.get('/orders/created-by-hour', getOrdersCreatedByHour);
// GET /orders/delivered-by-hour
router.get('/orders/delivered-by-hour', getOrdersDeliveredByHour);
// GET /orders/avg-create-to-pickup
router.get('/orders/avg-create-to-pickup', getAvgTimeCreateToPickup);
// GET /orders/avg-pickup-to-dispatch
router.get('/orders/avg-pickup-to-dispatch', getAvgTimePickupToDispatch);
// GET /orders/avg-dispatch-to-delivery
router.get('/orders/avg-dispatch-to-delivery', getAvgTimeDispatchToDelivery);
// GET /orders/avg-create-to-delivery
router.get('/orders/avg-create-to-delivery', getAvgTimeCreateToDelivery);
// GET /orders/late-pickups
router.get('/orders/late-pickups', getLatePickups);

export default router;

