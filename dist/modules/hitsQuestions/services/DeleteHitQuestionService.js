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

let DeleteHitQuestionService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('hitsQuestionRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IHitsQuestionRepository.IHitsQuestionsRepository === "undefined" ? Object : _IHitsQuestionRepository.IHitsQuestionsRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class DeleteHitQuestionService {
  constructor(hitsQuestionRepository) {
    this.hitsQuestionRepository = hitsQuestionRepository;
  }

  async execute(id) {
    const hitsQuestion = await this.hitsQuestionRepository.findById(id);

    if (!hitsQuestion) {
      throw new _AppError.default('User hits not found.');
    }

    await this.hitsQuestionRepository.remove(hitsQuestion);
  }

}) || _class) || _class) || _class) || _class);
exports.default = DeleteHitQuestionService;