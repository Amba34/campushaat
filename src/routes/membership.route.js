import { Router } from 'express';
import {
  getTotalMembershipsByValue,
  getTotalMembershipsAndValuePerMonth,
  getTotalMembershipValue,
  getTotalNonMemberPayment,
  getPaymentStatsByMode
} from '../controllers/membership.controller.js';

const router = Router();

router.get('/total-memberships-by-value', getTotalMembershipsByValue);
router.get('/total-memberships-and-value-per-month', getTotalMembershipsAndValuePerMonth);
router.get('/total-membership-value', getTotalMembershipValue);
router.get('/total-non-member-payment', getTotalNonMemberPayment);
router.get('/payment-stats-by-mode', getPaymentStatsByMode);

export default router; 