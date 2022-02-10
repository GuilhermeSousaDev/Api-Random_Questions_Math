"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _isAuthenticated = _interopRequireDefault(require("../../../../../shared/infra/http/middlewares/isAuthenticated"));

var _UserController = _interopRequireDefault(require("../controllers/UserController"));

var _celebrate = require("celebrate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const userRouter = (0, _express.Router)();
const userController = new _UserController.default();
userRouter.get('/', _isAuthenticated.default, userController.index);
userRouter.get('/:id', (0, _celebrate.celebrate)({
  [_celebrate.Segments.PARAMS]: {
    id: _celebrate.Joi.string().required()
  }
}), userController.show);
userRouter.post('/', (0, _celebrate.celebrate)({
  [_celebrate.Segments.BODY]: {
    name: _celebrate.Joi.string().required(),
    email: _celebrate.Joi.string().email().required(),
    password: _celebrate.Joi.string().required()
  }
}), userController.create);
userRouter.delete('/:id', (0, _celebrate.celebrate)({
  [_celebrate.Segments.PARAMS]: {
    id: _celebrate.Joi.string().required()
  }
}), userController.delete);
var _default = userRouter;
exports.default = _default;