import "dotenv/config";
import app from "./app.js";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URI);

(async () => {
  try {
    const db = client.db("test_db");
    await client.connect();
    console.log("MongoDB connected");
    app.locals.db = db; // Make DB accessible in routes/controllers

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  } catch (err) {
    console.error("DB connection failed:", err);
  }
})();
