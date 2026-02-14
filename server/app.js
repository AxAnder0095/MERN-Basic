import express from "express";
import cors from "cors";
import testRoutes from "./routes/test.route.js";

const app = express();

app.use(cors({ origin: ["http://localhost:5173"] }));
app.use(express.json());

// Routes
app.use("/api/test", testRoutes);

export default app;
