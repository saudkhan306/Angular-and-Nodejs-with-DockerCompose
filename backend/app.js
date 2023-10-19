const express = require("express");
const app = express();
const port = process.env.port;

app.get("/", (req, res) => {
  res.send("Hello, Docker Compose Node.js App! Live");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
