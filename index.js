const express = require("express");
const app = express();
const port = 3000;

// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => {
  return res.send("hello world!! Iam Dinh Ngoc Dinh");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port} at http://localhost:${port}`);
});
