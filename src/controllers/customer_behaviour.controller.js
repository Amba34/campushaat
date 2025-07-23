import { db } from '../utils/dbutil.js';
import { asyncHandler } from '../utils/asyncHandalar.js';
import { ApiResponse } from '../utils/ApiResposce.js';
import { ApiError } from '../utils/ApiError.js';
import * as queries from '../quries/customer_behaviour.js';

export const getRepeatVsOneTimeBuyers = asyncHandler(async (req, res) => {
  try {
    const [rows] = await db.query(queries.repeatVsOneTimeBuyers);
    res.status(200).json(new ApiResponse(true, 'Repeat vs one-time buyers fetched', 200, rows));
  } catch (error) {
    throw new ApiError(500, 'Failed to fetch repeat vs one-time buyers', [error.message]);
  }
});

export const getRepeatBuyersFavoriteCategories = asyncHandler(async (req, res) => {
  try {
    const [rows] = await db.query(queries.repeatBuyersFavoriteCategories);
    res.status(200).json(new ApiResponse(true, 'Repeat buyers favorite categories fetched', 200, rows));
  } catch (error) {
    throw new ApiError(500, 'Failed to fetch repeat buyers favorite categories', [error.message]);
  }
}); 