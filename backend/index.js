const connectToMongo = require("./db");
const express = require("express");
import path from "path";
import { fileURLToPath } from "url";
var cors = require("cors");
const port = process.env.port || 5000;
connectToMongo();
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.get("/", (req, res) => {
  res.send("hello");
});
app.use(cors());
app.use(express.json());
app.use(express.static(path.json(__dirname, "../build")));

// Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));
app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`);
});
