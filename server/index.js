const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require('./routes')
const port = process.env.PORT || 3001



app.use(cors());
app.use(routes())
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Server is running on ${port}...`);
});