import User from "../models/user.model.js";
import { ApiError } from "../utils/apiErrorHandler.js";
import { generateWebToken } from "../utils/jwtTokenGenerateHandler.js";
import {
  loginValidation,
  registerValidation,
} from "../validations/user.validation.js";
import bcrypt from "bcryptjs";

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    if (!users || users.length === 0) {
      throw new ApiError(404, "No users found");
    }

    const sanitizedUsers = users.map((user) => {
      const userObj = user.toObject();
      delete userObj.password;
      return userObj;
    });
    res.sendSuccess(sanitizedUsers, "Users fetched successfully", 200);
  } catch (error) {
    next(error);
  }
};

export const getUsersByID = async (req, res, next) => {
  try {
    const { userId } = req.query;
    if (!userId) {
      throw new ApiError(400, "userId is required!");
    }

    const user = await User.findById(userId);
    if (!user) {
      throw new ApiError(404, "User not found");
    }

    const userResponse = user.toObject();
    delete userResponse.password;
    res.sendSuccess(userResponse, "User fetched successfully", 200);
  } catch (error) {
    next(error);
  }
};

export const registerUser = async (req, res, next) => {
  try {
    const { error } = registerValidation(req.body);
    if (error) {
      throw new ApiError(400, error.details?.[0]?.message || error);
    }

    const { firstName, lastName, email, password, gender, profileImage } =
      req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new ApiError(400, "Email already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      gender,
      profileImage,
    });

    const userResponse = newUser.toObject();
    delete userResponse.password;
    res.sendSuccess(userResponse, "User created successfully", 201);
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { error } = loginValidation(req.body);
    if (error) {
      throw new ApiError(400, error);
    }

    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      throw new ApiError(400, "User doesn't exist! Please register");
    }

    const isPasswordValid = bcrypt.compareSync(password, existingUser.password);
    if (!isPasswordValid) {
      throw new ApiError(401, "Invalid credentials");
    }

    const userResponse = existingUser.toObject();
    delete userResponse.password;

    const token = await generateWebToken(email, existingUser._id);

    const updateUserResponse = {
      ...userResponse,
      token,
    };

    res.sendSuccess(updateUserResponse, "User logged in successfully", 200);
  } catch (error) {
    next(error);
  }
};

export const updateUserByID = async (req, res, next) => {
  try {
    const { userId } = req.query;
    if (!userId) {
      throw new ApiError(400, "userId is required!");
    }

    const { firstName, lastName, gender, profileImage } = req.body;
    const user = await User.findByIdAndUpdate(
      userId,
      {
        firstName,
        lastName,
        gender,
        profileImage,
      },
      { new: true }
    );

    if (!user) {
      throw new ApiError(404, "User not found");
    }

    const userResponse = user.toObject();
    delete userResponse.password;
    res.sendSuccess(userResponse, "User update successfully", 200);
  } catch (error) {
    next(error);
  }
};
