"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _DeleteHitQuestionService = _interopRequireDefault(require("../../../services/DeleteHitQuestionService"));

var _IncrementHitsQuestionService = _interopRequireDefault(require("../../../services/IncrementHitsQuestionService"));

var _ListHitQuestionService = _interopRequireDefault(require("../../../services/ListHitQuestionService"));

var _ShowHitQuestionService = _interopRequireDefault(require("../../../services/ShowHitQuestionService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class HitsQuestionController {
  async index(req, res) {
    const listHitQuestionService = _tsyringe.container.resolve(_ListHitQuestionService.default);

    const hitsQuestions = await listHitQuestionService.execute();
    return res.json(hitsQuestions);
  }

  async show(req, res) {
    try {
      const {
        id
      } = req.params;

      const showHitQuestion = _tsyringe.container.resolve(_ShowHitQuestionService.default);

      const hitQuestion = await showHitQuestion.execute(id);
      return res.json(hitQuestion);
    } catch (error) {
      return res.json(error.message);
    }
  }

  async create(req, res) {
    try {
      const {
        hitsBhaskara,
        hitsPitagoras,
        hitsVelmedia
      } = req.body;
      const user = req.user;
      const userId = req.user.id;

      const incrementOrCreate = _tsyringe.container.resolve(_IncrementHitsQuestionService.default);

      const userHitQuestion = await incrementOrCreate.execute({
        userId,
        user,
        hitsBhaskara,
        hitsPitagoras,
        hitsVelmedia
      });
      return res.json(userHitQuestion);
    } catch (error) {
      return res.json(error.message);
    }
  }

  async delete(req, res) {
    const {
      id
    } = req.params;

    const deleteHitQuestion = _tsyringe.container.resolve(_DeleteHitQuestionService.default);

    await deleteHitQuestion.execute(id);
    return res.json({
      message: "Deletado com Sucesso"
    });
  }

}

exports.default = HitsQuestionController;