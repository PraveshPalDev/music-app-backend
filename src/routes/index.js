import express from "express";
import userRoutes from "./user.routes.js";

const router = express.Router();

// All routes go here
router.use("/users", userRoutes);

export default router;
