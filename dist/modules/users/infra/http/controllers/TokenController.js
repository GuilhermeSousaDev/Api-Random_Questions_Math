"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _VerificTokenService = _interopRequireDefault(require("../../../services/VerificTokenService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TokenController {
  async index(req, res) {
    const token = req.headers.authorization;
    const verificTokenService = new _VerificTokenService.default();
    const verificToken = await verificTokenService.execute(token);
    return res.json(verificToken);
  }

}

exports.default = TokenController;