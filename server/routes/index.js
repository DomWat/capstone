const express = require("express");
const app = express();

const getStatus = require('../controllers/status/get')

module.exports = () => {
  app.get("/status", getStatus);

  return app;
};
