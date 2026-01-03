import express from "express";
import routes from "./routes";
import { errorHandler } from "./middleware/errorHandler";

export const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api", routes);

// Global error handler
app.use(errorHandler);
