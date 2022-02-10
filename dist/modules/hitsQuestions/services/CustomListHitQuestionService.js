"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _tsyringe = require("tsyringe");

var _IHitsQuestionRepository = require("../domain/repositories/IHitsQuestionRepository");

var _dec, _dec2, _dec3, _dec4, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let CustomListHitQuestionService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('hitsQuestionRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IHitsQuestionRepository.IHitsQuestionsRepository === "undefined" ? Object : _IHitsQuestionRepository.IHitsQuestionsRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class CustomListHitQuestionService {
  constructor(hitsQuestionRepository) {
    this.hitsQuestionRepository = hitsQuestionRepository;
  }

  async execute({
    limit,
    offset
  }) {
    const hitsQuestions = await this.hitsQuestionRepository.findWithOffsetAndLimit({
      limit,
      offset
    });
    const [, hitQuestionDataQuantity] = await this.hitsQuestionRepository.findAndCount();
    let response = {
      hitsQuestions: hitsQuestions
    };

    if (offset <= 0 || limit <= 0) {
      throw new _AppError.default('Choose a number more than 0');
    }

    if (offset > hitQuestionDataQuantity) {
      throw new _AppError.default('Extended data limit');
    }

    if (offset > 10 && offset < hitQuestionDataQuantity) {
      response = {
        hitsQuestions: hitsQuestions,
        next: `http://localhost:8081/question?offset=${offset + 10}`,
        prev: `http://localhost:8081/question?offset=${offset - 10}`
      };
    }

    response = {
      hitsQuestions: hitsQuestions,
      next: `http://localhost:8081/question?offset=10`
    };
    return response;
  }

}) || _class) || _class) || _class) || _class);
exports.default = CustomListHitQuestionService;