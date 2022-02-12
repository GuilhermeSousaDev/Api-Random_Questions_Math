"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _multer = _interopRequireDefault(require("multer"));

var _isAuthenticated = _interopRequireDefault(require("../../../../../shared/infra/http/middlewares/isAuthenticated"));

var _UserAvatarController = _interopRequireDefault(require("../controllers/UserAvatarController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const userAvatarRouter = (0, _express.Router)();
const userAvatarController = new _UserAvatarController.default();
const multerConfig = (0, _multer.default)();
userAvatarRouter.put('/', _isAuthenticated.default, multerConfig.single('avatar'), userAvatarController.update);
var _default = userAvatarRouter;
exports.default = _default;