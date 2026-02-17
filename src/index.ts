import express from "express";
import cors from "cors";
import subjectsRouter from "./routes/subjects";

const app = express();
const PORT = 8000;

if (!process.env.FRONTEND_URL) {
   console.warn("FRONTEND_URL is not set — CORS will be restrictive by default");
}

app.use(cors({
   origin: process.env.FRONTEND_URL || false,
   methods: ["GET", "POST", "PUT", "DELETE"],
   credentials: true,
}));

app.use(express.json());

app.use("/api/subjects", subjectsRouter);

app.get("/", (req, res) => {
   res.send("Hello, Welcome to the Classroom API.");
});

app.listen(PORT, () => {
   console.log(`Server is running at http://localhost:${PORT}`);
});