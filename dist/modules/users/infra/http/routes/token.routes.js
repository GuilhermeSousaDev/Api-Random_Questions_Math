"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _isAuthenticated = _interopRequireDefault(require("../../../../../shared/infra/http/middlewares/isAuthenticated"));

var _TokenController = _interopRequireDefault(require("../controllers/TokenController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const tokenRouter = (0, _express.Router)();
const tokenController = new _TokenController.default();
tokenRouter.get('/', _isAuthenticated.default, tokenController.index);
var _default = tokenRouter;
exports.default = _default;