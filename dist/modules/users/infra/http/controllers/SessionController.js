"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CreateSessionService = _interopRequireDefault(require("../../../services/CreateSessionService"));

var _tsyringe = require("tsyringe");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SessionController {
  async create(req, res) {
    try {
      const {
        email,
        password
      } = req.body;

      const createSession = _tsyringe.container.resolve(_CreateSessionService.default);

      const session = await createSession.execute({
        email,
        password
      });
      return res.json(session);
    } catch (error) {
      return res.json(error.message);
    }
  }

}

exports.default = SessionController;