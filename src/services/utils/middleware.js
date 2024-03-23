const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { dbQuery } = require("../../db-access.js");

const app = express();
const port = 3005;

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/query", async (req, res) => {
  const value = req.body;
  const query = value.query;
  console.log(query);
  const result = await dbQuery(query);
  console.log(result);
  res.send(result);
});

app.listen(port, () =>
  console.log(`Database middleware activated on port ${port}!`)
);
