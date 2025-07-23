import { db } from '../utils/dbutil.js';
import { asyncHandler } from '../utils/asyncHandalar.js';
import { ApiResponse } from '../utils/ApiResposce.js';
import { ApiError } from '../utils/ApiError.js';
import * as queries from '../quries/sales_and_order_trends.js';

export const getTotalOrdersPerMonth = asyncHandler(async (req, res) => {
  try {
    const [rows] = await db.query(queries.totalOrdersPerMonth);
    res.status(200).json(new ApiResponse(true, 'Total orders per month fetched', 200, rows));
  } catch (error) {
    throw new ApiError(500, 'Failed to fetch total orders per month', [error.message]);
  }
});

export const getTotalRevenuePerMonth = asyncHandler(async (req, res) => {
  try {
    const [rows] = await db.query(queries.totalRevenuePerMonth);
    res.status(200).json(new ApiResponse(true, 'Total revenue per month fetched', 200, rows));
  } catch (error) {
    throw new ApiError(500, 'Failed to fetch total revenue per month', [error.message]);
  }
});

export const getAverageOrderValuePerBuyer = asyncHandler(async (req, res) => {
  try {
    const [rows] = await db.query(queries.averageOrderValuePerBuyer);
    res.status(200).json(new ApiResponse(true, 'Average order value per buyer fetched', 200, rows));
  } catch (error) {
    throw new ApiError(500, 'Failed to fetch average order value per buyer', [error.message]);
  }
});

export const getTop10SellingProductsByQuantity = asyncHandler(async (req, res) => {
  try {
    const [rows] = await db.query(queries.top10SellingProductsByQuantity);
    res.status(200).json(new ApiResponse(true, 'Top 10 selling products by quantity fetched', 200, rows));
  } catch (error) {
    throw new ApiError(500, 'Failed to fetch top 10 selling products by quantity', [error.message]);
  }
});

export const getHighValueBuyers = asyncHandler(async (req, res) => {
  try {
    const [rows] = await db.query(queries.highValueBuyers);
    res.status(200).json(new ApiResponse(true, 'High value buyers fetched', 200, rows));
  } catch (error) {
    throw new ApiError(500, 'Failed to fetch high value buyers', [error.message]);
  }
}); 