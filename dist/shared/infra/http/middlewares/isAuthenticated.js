"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAuthenticated;

var _jsonwebtoken = require("jsonwebtoken");

var _auth = _interopRequireDefault(require("../../../../config/auth"));

var _AppError = _interopRequireDefault(require("../../../errors/AppError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isAuthenticated(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    throw new _AppError.default('Token not found.', 404);
  }

  try {
    (0, _jsonwebtoken.verify)(token, _auth.default.secret);
    const {
      id,
      name,
      avatar
    } = (0, _jsonwebtoken.decode)(token);
    req.user = {
      id,
      name,
      avatar
    };
    next();
  } catch (error) {
    throw new _AppError.default('Invalid Token.');
  }
}