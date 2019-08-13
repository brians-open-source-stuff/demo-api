require("dotenv").config();
const express = require("express");
const app = express();

require("./config/parser")(app);

require("./views/pages.view")(app);

require("./server")(app);
