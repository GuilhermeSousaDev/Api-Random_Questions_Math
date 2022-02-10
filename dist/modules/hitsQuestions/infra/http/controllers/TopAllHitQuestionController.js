"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _TopAllHitQuestionsService = _interopRequireDefault(require("../../../services/TopAllHitQuestionsService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TopAllHitQuestionController {
  async index(req, res) {
    const listTopHitQuestion = _tsyringe.container.resolve(_TopAllHitQuestionsService.default);

    const hitQuestion = await listTopHitQuestion.execute();
    return res.json(hitQuestion);
  }

}

exports.default = TopAllHitQuestionController;