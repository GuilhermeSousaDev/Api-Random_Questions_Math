"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _CustomListHitQuestionService = _interopRequireDefault(require("../../../services/CustomListHitQuestionService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CustomHitsQuestionController {
  async index(req, res) {
    const limit = Number(req.query.limit);
    const offset = Number(req.query.offset);

    const customListHitQuestionService = _tsyringe.container.resolve(_CustomListHitQuestionService.default);

    const hitsQuestions = await customListHitQuestionService.execute({
      limit,
      offset
    });
    return res.json(hitsQuestions);
  }

}

exports.default = CustomHitsQuestionController;