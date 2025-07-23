import { db } from '../utils/dbutil.js';
import { asyncHandler } from '../utils/asyncHandalar.js';
import { ApiResponse } from '../utils/ApiResposce.js';
import { ApiError } from '../utils/ApiError.js';
import * as queries from '../quries/category_and_product_insights.js';

export const getOrderByYear = asyncHandler(async (req, res) => {
  try {
    const [rows] = await db.query(queries.orderByYear);
    res.status(200).json(new ApiResponse(true, 'Order by year fetched', 200, rows));
  } catch (error) {
    throw new ApiError(500, 'Failed to fetch order by year', [error.message]);
  }
});

export const getProductsWithHighestPrepTime = asyncHandler(async (req, res) => {
  try {
    const [rows] = await db.query(queries.productsWithHighestPrepTime);
    res.status(200).json(new ApiResponse(true, 'Products with highest prep time fetched', 200, rows));
  } catch (error) {
    throw new ApiError(500, 'Failed to fetch products with highest prep time', [error.message]);
  }
});

export const getCampusWiseMonthlyRevenue = asyncHandler(async (req, res) => {
  try {
    const [rows] = await db.query(queries.campusWiseMonthlyRevenue);
    res.status(200).json(new ApiResponse(true, 'Campus-wise monthly revenue fetched', 200, rows));
  } catch (error) {
    throw new ApiError(500, 'Failed to fetch campus-wise monthly revenue', [error.message]);
  }
});

export const getMostOrderedProductsInEachCategory = asyncHandler(async (req, res) => {
  try {
    const [rows] = await db.query(queries.mostOrderedProductsInEachCategory);
    res.status(200).json(new ApiResponse(true, 'Most ordered products in each category fetched', 200, rows));
  } catch (error) {
    throw new ApiError(500, 'Failed to fetch most ordered products in each category', [error.message]);
  }
}); 