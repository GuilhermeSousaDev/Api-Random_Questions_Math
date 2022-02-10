"use strict";

require("reflect-metadata");

require("dotenv/config");

require("express-async-errors");

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _celebrate = require("celebrate");

var _AppError = _interopRequireDefault(require("../../errors/AppError"));

var _index = _interopRequireDefault(require("./routes/index.routes"));

require("../typeorm/connection");

require("../../container");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class App {
  constructor() {
    this.app = void 0;
    this.port = 8081;
    this.app = (0, _express.default)();
    this.middlewares();
    this.routes();
    this.listen();
  }

  routes() {
    this.app.use(_express.default.json());
    this.app.use(_express.default.urlencoded());
    this.app.use(_index.default);
    this.app.use('/files', _express.default.static('uploads/'));
    this.app.use((0, _celebrate.errors)());
    this.app.use((error, req, res, next) => {
      if (error instanceof _AppError.default) {
        return res.status(error.statusCode).json({
          status: 'error',
          message: error.message
        });
      }

      return res.status(500).json({
        status: 'error',
        error: 'Internal server error',
        message: error.message
      });
    });
  }

  middlewares() {
    this.app.use((0, _cors.default)());
  }

  listen() {
    this.app.listen(this.port, () => console.log("Iniciado com Sucesso"));
  }

}

new App();