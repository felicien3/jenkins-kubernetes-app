const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello! Welcome to our DevOps CI/CD practical.");
});

app.get("/health", (req, res) => {
  res.json({
    status: "success",
    message: "Application is running",
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
