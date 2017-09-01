const express = require("express");
const mustacheExpress = require("mustache-express");
const session = require("express-session");
const logger = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
// const sessionConfig = require("./sessionConfig");
// const users = require("./data");
// const checkAuth = require("./middlewares/checkAuth");
// const indexRoutes = require("./routes/indexRoutes");
// const authRoutes = require("./routes/authRoutes");
// const userRoutes = require("./routes/userRoutes");
const app = express();
const port = process.env.PORT || 8000;




app.listen(port, () => {
    console.log(`Running on port ${port}!`);
  });