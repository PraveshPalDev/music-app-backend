import express from "express";
import {
  getAllUsers,
  registerUser,
  loginUser,
  getUsersByID,
  updateUserByID,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/getUserId", getUsersByID);
router.post("/registerUser", registerUser);
router.post("/loginUser", loginUser);
router.put("/updateUserById", updateUserByID);

export default router;
