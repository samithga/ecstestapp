const express = require("express");
const app = express();

app.get("/ecstestapp", (req, res) => res.send("Hello ecstestapp!"));

app.get("/health", (req, res) => {
  res.status(200);
  res.send("healthy");
});

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
