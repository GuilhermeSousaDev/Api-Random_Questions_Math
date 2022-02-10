"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _ListTopHitQuestionVelmediaService = _interopRequireDefault(require("../../../services/ListTopHitQuestionVelmediaService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TopHitQuestionVelmediaController {
  async index(req, res) {
    const listTopHitQuestionVelmedia = _tsyringe.container.resolve(_ListTopHitQuestionVelmediaService.default);

    const hitQuestion = await listTopHitQuestionVelmedia.execute();
    return res.json(hitQuestion);
  }

}

exports.default = TopHitQuestionVelmediaController;