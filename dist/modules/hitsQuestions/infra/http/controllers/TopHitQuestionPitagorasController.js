"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _ListTopHitQuestionPitagorasService = _interopRequireDefault(require("../../../services/ListTopHitQuestionPitagorasService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TopHitQuestionPitagorasController {
  async index(req, res) {
    const listTopHitQuestionPitagoras = _tsyringe.container.resolve(_ListTopHitQuestionPitagorasService.default);

    const hitQuestion = await listTopHitQuestionPitagoras.execute();
    return res.json(hitQuestion);
  }

}

exports.default = TopHitQuestionPitagorasController;