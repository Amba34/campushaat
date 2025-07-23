import { Router } from 'express';
import {
  getRepeatVsOneTimeBuyers,
  getRepeatBuyersFavoriteCategories
} from '../controllers/customer_behaviour.controller.js';

const router = Router();

router.get('/repeat-vs-one-time-buyers', getRepeatVsOneTimeBuyers);
router.get('/repeat-buyers-favorite-categories', getRepeatBuyersFavoriteCategories);

export default router; 