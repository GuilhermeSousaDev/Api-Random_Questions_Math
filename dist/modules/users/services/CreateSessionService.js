"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _auth = _interopRequireDefault(require("../../../config/auth"));

var _bcryptjs = require("bcryptjs");

var _jsonwebtoken = require("jsonwebtoken");

var _IUserRepository = require("../domain/repositories/IUserRepository");

var _tsyringe = require("tsyringe");

var _dec, _dec2, _dec3, _dec4, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let CreateSessionService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('userRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IUserRepository.IUserRepository === "undefined" ? Object : _IUserRepository.IUserRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class CreateSessionService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute({
    email,
    password
  }) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new _AppError.default('User not found');
    }

    const verifiedPassword = await (0, _bcryptjs.compare)(password, user.password);

    if (!verifiedPassword) {
      throw new _AppError.default('Incorrect Password');
    }

    const {
      id,
      name,
      avatar
    } = user;
    const token = (0, _jsonwebtoken.sign)({
      id,
      name,
      avatar
    }, _auth.default.secret, {
      expiresIn: _auth.default.expire
    });
    return {
      user,
      token
    };
  }

}) || _class) || _class) || _class) || _class);
exports.default = CreateSessionService;