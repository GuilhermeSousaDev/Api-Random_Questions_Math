"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _celebrate = require("celebrate");

var _express = require("express");

var _isAuthenticated = _interopRequireDefault(require("../../../../../shared/infra/http/middlewares/isAuthenticated"));

var _HitsQuestionController = _interopRequireDefault(require("../controllers/HitsQuestionController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const hitsQuestionRouter = (0, _express.Router)();
const hitsQuestionController = new _HitsQuestionController.default();
hitsQuestionRouter.get('/', hitsQuestionController.index);
hitsQuestionRouter.get('/:id', hitsQuestionController.show);
hitsQuestionRouter.post('/', _isAuthenticated.default, (0, _celebrate.celebrate)({
  [_celebrate.Segments.BODY]: {
    hitsBhaskara: _celebrate.Joi.number().required(),
    hitsPitagoras: _celebrate.Joi.number().required(),
    hitsVelmedia: _celebrate.Joi.number().required()
  }
}), hitsQuestionController.create);
hitsQuestionRouter.delete('/:id', (0, _celebrate.celebrate)({
  [_celebrate.Segments.PARAMS]: {
    id: _celebrate.Joi.string().required()
  }
}), hitsQuestionController.delete);
var _default = hitsQuestionRouter;
exports.default = _default;