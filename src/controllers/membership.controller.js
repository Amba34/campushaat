import { db } from '../utils/dbutil.js';
import { asyncHandler } from '../utils/asyncHandalar.js';
import { ApiResponse } from '../utils/ApiResposce.js';
import { ApiError } from '../utils/ApiError.js';
import * as membershipQueries from '../quries/membership.js';

export const getTotalMembershipsByValue = asyncHandler(async (req, res) => {
  console.log(membershipQueries)
  try {
    const [rows] = await db.query(membershipQueries.totalMembershipsByValue);
    res.status(200).json(new ApiResponse(true, 'Total memberships by value fetched', 200, rows));
  } catch (error) {
    throw new ApiError(500, 'Failed to fetch total memberships by value', [error.message]);
  }
});

export const getTotalMembershipsAndValuePerMonth = asyncHandler(async (req, res) => {
  try {
    const [rows] = await db.query(membershipQueries.totalMembershipsAndValuePerMonth);
    res.status(200).json(new ApiResponse(true, 'Total memberships and value per month fetched', 200, rows));
  } catch (error) {
    throw new ApiError(500, 'Failed to fetch total memberships and value per month', [error.message]);
  }
});

export const getTotalMembershipValue = asyncHandler(async (req, res) => {
  try {
    const [rows] = await db.query(membershipQueries.totalMembershipValue);
    res.status(200).json(new ApiResponse(true, 'Total membership value fetched', 200, rows));
  } catch (error) {
    throw new ApiError(500, 'Failed to fetch total membership value', [error.message]);
  }
});

export const getTotalNonMemberPayment = asyncHandler(async (req, res) => {
  try {
    const [rows] = await db.query(membershipQueries.totalNonMemberPayment);
    res.status(200).json(new ApiResponse(true, 'Total non-member payment fetched', 200, rows));
  } catch (error) {
    throw new ApiError(500, 'Failed to fetch total non-member payment', [error.message]);
  }
});

export const getPaymentStatsByMode = asyncHandler(async (req, res) => {
  try {
    const [rows] = await db.query(membershipQueries.paymentStatsByMode);
    res.status(200).json(new ApiResponse(true, 'Payment stats by mode fetched', 200, rows));
  } catch (error) {
    throw new ApiError(500, 'Failed to fetch payment stats by mode', [error.message]);
  }
}); 