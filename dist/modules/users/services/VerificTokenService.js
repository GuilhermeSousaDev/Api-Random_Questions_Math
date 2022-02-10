"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonwebtoken = require("jsonwebtoken");

var _auth = _interopRequireDefault(require("../../../config/auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class VerificTokenService {
  async execute(token) {
    const tokenVerified = (0, _jsonwebtoken.verify)(token, _auth.default.secret);
    return {
      tokenVerified,
      token
    };
  }

}

exports.default = VerificTokenService;