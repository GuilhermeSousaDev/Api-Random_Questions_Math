"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _IHitsQuestionRepository = require("../domain/repositories/IHitsQuestionRepository");

var _dec, _dec2, _dec3, _dec4, _class;

let ListTopHitQuestionBhaskaraService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('hitsQuestionRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IHitsQuestionRepository.IHitsQuestionsRepository === "undefined" ? Object : _IHitsQuestionRepository.IHitsQuestionsRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class ListTopHitQuestionBhaskaraService {
  constructor(hitsQuestionRepository) {
    this.hitsQuestionRepository = hitsQuestionRepository;
  }

  async execute() {
    const topHitQuestion = await this.hitsQuestionRepository.findTopBhaskara();
    return topHitQuestion;
  }

}) || _class) || _class) || _class) || _class);
exports.default = ListTopHitQuestionBhaskaraService;