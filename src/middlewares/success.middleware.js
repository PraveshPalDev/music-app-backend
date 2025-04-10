import { ApiResponse } from "../utils/apiResponseHandler.js";

const successHandler = (req, res, next) => {
  res.sendSuccess = (data = null, message = "Success", statusCode = 200) => {
    const response = new ApiResponse(statusCode, data, message);
    res.status(statusCode).json(response);
  };
  next();
};

export default successHandler;
