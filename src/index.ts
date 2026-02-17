import express from "express";
import cors from "cors";
import subjectsRoutes from "./routes/subjects";

const app = express();
const PORT = 8000;

if (!process.env.FRONTEND_URL) throw new Error("FRONTEND_URL env variable is not set");
app.use(cors({
  origin: process.env.FRONTEND_URL || false,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

app.use("/api/subjects", subjectsRoutes);

app.get("/", (req, res) => {
  res.send("Hello, Welcome to Classroom API!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});