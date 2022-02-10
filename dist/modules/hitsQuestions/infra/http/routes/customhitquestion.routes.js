"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _CustomHitQuestionController = _interopRequireDefault(require("../controllers/CustomHitQuestionController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const customHitQuestionRouter = (0, _express.Router)();
const customhitsQuestionController = new _CustomHitQuestionController.default();
customHitQuestionRouter.get('/hits', customhitsQuestionController.index);
var _default = customHitQuestionRouter;
exports.default = _default;