const config = require("./src/config/env.config");
require("./db");
const router = require("./src/api/router");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

//Headers

console.log(config);

//Middelware
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
); //for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json
app.use(morgan(config.format_logs));
app.use(cors());

//Routes
router(app);

app.listen(config.port, () => {
  console.log(`listening on port ${config.port} in ${config.node_env} mode`);
});
