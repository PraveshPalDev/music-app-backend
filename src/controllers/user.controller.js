import {ApiError} from '../utils/apiErrorHandler.js';

export const getAllUsers = async (req, res, next) => {
  try {
    const users = [
      {
        name: 'Adeel Solangi',
        language: 'Sindhi',
        id: 'V59OF92YF627HFY0',
        bio: 'Donec lobortis eleifend condimentum. Cras dictum dolor lacinia lectus vehicula rutrum. Maecenas quis nisi nunc. Nam tristique feugiat est vitae mollis. Maecenas quis nisi nunc.',
        version: 6.1,
      },
    ];

    if (!users || users.length === 0) {
      throw new ApiError(404, 'No users found');
    }

    res.sendSuccess(users, 'Users fetched successfully', 200);
  } catch (error) {
    next(error);
  }
};
