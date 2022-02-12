"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _ListTopHitQuestionBhaskaraService = _interopRequireDefault(require("../../../services/ListTopHitQuestionBhaskaraService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TopHitQuestionBhaskaraController {
  async index(req, res) {
    const listTopHitQuestionBhasakara = _tsyringe.container.resolve(_ListTopHitQuestionBhaskaraService.default);

    const hitQuestion = await listTopHitQuestionBhasakara.execute();
    return res.json(hitQuestion);
  }

}

exports.default = TopHitQuestionBhaskaraController;