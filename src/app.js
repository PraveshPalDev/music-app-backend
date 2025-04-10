import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";

import routes from "./routes/index.js";
import successHandler from "./middlewares/success.middleware.js";
import errorHandler from "./middlewares/error.middleware.js";

const app = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(successHandler);

// Routes
app.get("/api", (req, res) => {
  res.send("🚀 get request received. Server is running...");
});

// Main API routes
app.use("/api/v1", routes);

// Global Error Handler
app.use(errorHandler);

export default app;
