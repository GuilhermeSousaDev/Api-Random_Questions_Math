"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _customhitquestion = _interopRequireDefault(require("../../../../modules/hitsQuestions/infra/http/routes/customhitquestion.routes"));

var _hitsquestion = _interopRequireDefault(require("../../../../modules/hitsQuestions/infra/http/routes/hitsquestion.routes"));

var _tophitquestion = _interopRequireDefault(require("../../../../modules/hitsQuestions/infra/http/routes/tophitquestion.routes"));

var _profile = _interopRequireDefault(require("../../../../modules/users/infra/http/routes/profile.routes"));

var _session = _interopRequireDefault(require("../../../../modules/users/infra/http/routes/session.routes"));

var _token = _interopRequireDefault(require("../../../../modules/users/infra/http/routes/token.routes"));

var _user = _interopRequireDefault(require("../../../../modules/users/infra/http/routes/user.routes"));

var _user_avatar = _interopRequireDefault(require("../../../../modules/users/infra/http/routes/user_avatar.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.use('/question', _hitsquestion.default);
router.use('/custom', _customhitquestion.default);
router.use('/top', _tophitquestion.default);
router.use('/user', _user.default);
router.use('/token', _token.default);
router.use('/avatar', _user_avatar.default);
router.use('/profile', _profile.default);
router.use('/login', _session.default);
var _default = router;
exports.default = _default;