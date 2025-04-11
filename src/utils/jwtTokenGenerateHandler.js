import jwt from "jsonwebtoken";
import { ApiError } from "../utils/apiErrorHandler.js";

export const generateWebToken = async (email, userId) => {
  try {
    const token = jwt.sign({ email, userId }, process.env.JWT_SECRET, {
      algorithm: "HS256",
      expiresIn: "1d",
    });

    return token;
  } catch (error) {
    throw new ApiError(500, "Error generating token");
  }
};

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new ApiError(401, "Unauthorized: No token provided");
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    throw new ApiError(403, "Forbidden: Invalid token");
  }
};

export default verifyToken;
