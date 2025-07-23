import { db } from '../utils/dbutil.js';
import { asyncHandler } from '../utils/asyncHandalar.js';
import { ApiResponse } from '../utils/ApiResposce.js';
import { ApiError } from '../utils/ApiError.js';
import {
  ordersDeliveredByYear,
  ordersDeliveredByMonth,
  ordersCreatedByHour,
  ordersDeliveredByHour,
  avgTimeCreateToPickup,
  avgTimePickupToDispatch,
  avgTimeDispatchToDelivery,
  avgTimeCreateToDelivery,
  latePickups
} from '../quries/orders.js';

export const getOrdersByYear = asyncHandler(async (req, res) => {
  try {
    const [rows] = await db.query(ordersDeliveredByYear);
    res.status(200).json(new ApiResponse(true, 'Orders by year fetched successfully', 200, rows));
  } catch (error) {
    throw new ApiError(500, 'Failed to fetch orders by year', [error.message]);
  }
});

export const getOrdersByMonth = asyncHandler(async (req, res) => {
  try {
    const [rows] = await db.query(ordersDeliveredByMonth);
    res.status(200).json(new ApiResponse(true, 'Orders by month fetched successfully', 200, rows));
  } catch (error) {
    throw new ApiError(500, 'Failed to fetch orders by month', [error.message]);
  }
});

export const getOrdersCreatedByHour = asyncHandler(async (req, res) => {
  try {
    const [rows] = await db.query(ordersCreatedByHour);
    res.status(200).json(new ApiResponse(true, 'Orders created by hour fetched successfully', 200, rows));
  } catch (error) {
    throw new ApiError(500, 'Failed to fetch orders created by hour', [error.message]);
  }
});

export const getOrdersDeliveredByHour = asyncHandler(async (req, res) => {
  try {
    const [rows] = await db.query(ordersDeliveredByHour);
    res.status(200).json(new ApiResponse(true, 'Orders delivered by hour fetched successfully', 200, rows));
  } catch (error) {
    throw new ApiError(500, 'Failed to fetch orders delivered by hour', [error.message]);
  }
});

export const getAvgTimeCreateToPickup = asyncHandler(async (req, res) => {
  try {
    const [rows] = await db.query(avgTimeCreateToPickup);
    res.status(200).json(new ApiResponse(true, 'Average time from create to pickup fetched successfully', 200, rows));
  } catch (error) {
    throw new ApiError(500, 'Failed to fetch average time from create to pickup', [error.message]);
  }
});

export const getAvgTimePickupToDispatch = asyncHandler(async (req, res) => {
  try {
    const [rows] = await db.query(avgTimePickupToDispatch);
    res.status(200).json(new ApiResponse(true, 'Average time from pickup to dispatch fetched successfully', 200, rows));
  } catch (error) {
    throw new ApiError(500, 'Failed to fetch average time from pickup to dispatch', [error.message]);
  }
});

export const getAvgTimeDispatchToDelivery = asyncHandler(async (req, res) => {
  try {
    const [rows] = await db.query(avgTimeDispatchToDelivery);
    res.status(200).json(new ApiResponse(true, 'Average time from dispatch to delivery fetched successfully', 200, rows));
  } catch (error) {
    throw new ApiError(500, 'Failed to fetch average time from dispatch to delivery', [error.message]);
  }
});

export const getAvgTimeCreateToDelivery = asyncHandler(async (req, res) => {
  try {
    const [rows] = await db.query(avgTimeCreateToDelivery);
    res.status(200).json(new ApiResponse(true, 'Average time from create to delivery fetched successfully', 200, rows));
  } catch (error) {
    throw new ApiError(500, 'Failed to fetch average time from create to delivery', [error.message]);
  }
});

export const getLatePickups = asyncHandler(async (req, res) => {
  try {
    const [rows] = await db.query(latePickups);
    res.status(200).json(new ApiResponse(true, 'Late pickups count fetched successfully', 200, rows));
  } catch (error) {
    throw new ApiError(500, 'Failed to fetch late pickups count', [error.message]);
  }
});
