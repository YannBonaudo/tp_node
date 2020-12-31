const mongoose = require("mongoose");
const { db_name } = require("./src/config/env.config");
const config = require("./src/config/env.config");

mongoose.connect(
  `mongodb://${config.db_user}:${config.db_password}@${config.db_host}/${config.db_name}`,
  {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  }
);

const db = mongoose.connection;

db.on(
  "error",
  console.error.bind(console, "Error during database connection !")
);
db.once("open", () => {
  console.log(`connected to database ${config.db_name} Success !`);
});
