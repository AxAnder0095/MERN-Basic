import express from "express";
import cors from "cors";
import testRoutes from "./routes/test.route.js";

const app = express();

app.use(cors({ origin: ["http://localhost:5173"] }));
app.use(express.json());

// Routes
app.use("/api/test", testRoutes);

app.use((err, req, res, next) => {
	if (err.name === "UnauthorizedError") {
		console.error("JWT validation failed:", err.message);
		return res.status(401).json({ error: "Invalid or missing token", details: err.message });
	}

	return next(err);
});

export default app;
