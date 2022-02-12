"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.limiter = void 0;

var _expressRateLimit = _interopRequireDefault(require("express-rate-limit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const limiter = (0, _expressRateLimit.default)({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: 'Too many accounts created from this IP, please try again after an hour'
});
exports.limiter = limiter;