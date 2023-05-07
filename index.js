const express = require("express");
const app = express();
const port = 8080;

app.get("/api/note-sale/search", (req, res) => {
  res.json({
    "statusCode": 200,
    "statusMessage:": "SUCCESS"
  })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${8080}!`);
});