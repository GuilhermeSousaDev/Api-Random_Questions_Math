"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _TopAllHitQuestionController = _interopRequireDefault(require("../controllers/TopAllHitQuestionController"));

var _TopHitQuestionBhaskaraController = _interopRequireDefault(require("../controllers/TopHitQuestionBhaskaraController"));

var _TopHitQuestionPitagorasController = _interopRequireDefault(require("../controllers/TopHitQuestionPitagorasController"));

var _TopHitQuestionVelmediaController = _interopRequireDefault(require("../controllers/TopHitQuestionVelmediaController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const topHitQuestionRouter = (0, _express.Router)();
const topHitQuestionBhaskaraController = new _TopHitQuestionBhaskaraController.default();
const topHitQuestionPitagorasController = new _TopHitQuestionPitagorasController.default();
const topHitQuestionVelmediaController = new _TopHitQuestionVelmediaController.default();
const topAllHitQuestionController = new _TopAllHitQuestionController.default();
topHitQuestionRouter.get('/all', topAllHitQuestionController.index);
topHitQuestionRouter.get('/bhaskara', topHitQuestionBhaskaraController.index);
topHitQuestionRouter.get('/pitagoras', topHitQuestionPitagorasController.index);
topHitQuestionRouter.get('/vel_media', topHitQuestionVelmediaController.index);
var _default = topHitQuestionRouter;
exports.default = _default;