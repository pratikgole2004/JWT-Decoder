import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/decode", (req, res) => {
  const { token } = req.body;
  if (!token) return res.status(400).json({ error: "No token provided" });

  try {
    const decoded = jwt.decode(token, { complete: true });
    res.json({ decoded });
  } catch (err) {
    res.status(400).json({ error: "Invalid JWT" });
  }
});

app.listen(5000, () => console.log("✅ Server running on port 5000"));
