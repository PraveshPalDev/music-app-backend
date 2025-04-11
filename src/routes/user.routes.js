import express from "express";
import {
  getAllUsers,
  registerUser,
  loginUser,
  getUsersByID,
  updateUserByID,
  deleteUserByID,
} from "../controllers/user.controller.js";
import verifyToken from "../utils/jwtTokenGenerateHandler.js";

const router = express.Router();

router.post("/registerUser", registerUser);
router.post("/loginUser", loginUser);

// here all endpoints to secure
router.get("/", verifyToken, getAllUsers);
router.get("/getUserId", verifyToken, getUsersByID);
router.put("/updateUserById", verifyToken, updateUserByID);
router.delete("/deleteUserById", verifyToken, deleteUserByID);

export default router;
