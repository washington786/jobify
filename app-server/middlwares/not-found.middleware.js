const express = require("express");
const notFound = require("../controller/error/notfound.controller");

const errorRouter = express.Router();

errorRouter.all('*',notFound);

module.exports = errorRouter;