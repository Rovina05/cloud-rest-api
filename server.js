const express = require("express");
const app = express();

app.use(express.json());

let reports = [];

app.get("/reports", (req, res) => {
  res.json(reports);
});

app.post("/reports", (req, res) => {
  const report = req.body;
  reports.push(report);
  res.status(201).json(report);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});