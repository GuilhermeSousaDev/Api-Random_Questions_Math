"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _bcryptjs = require("bcryptjs");

var _IUserRepository = require("../domain/repositories/IUserRepository");

var _tsyringe = require("tsyringe");

var _dec, _dec2, _dec3, _dec4, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let CreateUserService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('userRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IUserRepository.IUserRepository === "undefined" ? Object : _IUserRepository.IUserRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class CreateUserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute({
    name,
    email,
    password
  }) {
    const emailExists = await this.userRepository.findByEmail(email);

    if (emailExists) {
      throw new _AppError.default('This email already exists.');
    }

    const user = await this.userRepository.create({
      name,
      email,
      password
    });
    user.password = await (0, _bcryptjs.hash)(password, 8);
    await this.userRepository.save(user);
    return user;
  }

}) || _class) || _class) || _class) || _class);
exports.default = CreateUserService;