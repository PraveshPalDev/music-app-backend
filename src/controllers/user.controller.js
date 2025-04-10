import {ApiError} from '../utils/apiErrorHandler.js';

export const getAllUsers = async (req, res, next) => {
  try {
    const users = [];

    if (!users || users.length === 0) {
      throw new ApiError(404, 'No users found');
    }

    res.sendSuccess(users, 'Users fetched successfully', 200);
  } catch (error) {
    next(error);
  }
};
