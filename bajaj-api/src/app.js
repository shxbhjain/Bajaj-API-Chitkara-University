import express from "express";
import cors from "cors";
import bajajRoutes from "./routes/bajaj.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", bajajRoutes);

app.use((err, req, res, next) => {
  return res.status(err.status || 500).json({
    is_success: false,
    official_email: "shubh3933.beai23@chitkara.edu.in",
    error: err.message || "Internal Server Error"
  });
});

export default app;
