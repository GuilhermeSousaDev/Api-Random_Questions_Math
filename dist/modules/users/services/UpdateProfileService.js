"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _bcryptjs = require("bcryptjs");

var _tsyringe = require("tsyringe");

var _IUserRepository = require("../domain/repositories/IUserRepository");

var _dec, _dec2, _dec3, _dec4, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let UpdateProfileService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('userRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IUserRepository.IUserRepository === "undefined" ? Object : _IUserRepository.IUserRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class UpdateProfileService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute({
    id,
    name,
    email,
    password,
    old_password
  }) {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new _AppError.default('User not Found');
    }

    const userNewEmail = await this.userRepository.findByEmail(email);

    if (userNewEmail && userNewEmail.id.toString() !== id) {
      throw new _AppError.default('There is already one user with this email');
    }

    if (password && !old_password) {
      throw new _AppError.default('Old Password is Required');
    }

    if (password && old_password) {
      const checkOldPassword = await (0, _bcryptjs.compare)(old_password, user.password);

      if (!checkOldPassword) {
        throw new _AppError.default('Old Password does not match');
      }
    }

    const newPassword = await (0, _bcryptjs.hash)(password, 8);
    user.name = name;
    user.email = email;
    user.password = newPassword;
    this.userRepository.save(user);
    return user;
  }

}) || _class) || _class) || _class) || _class);
exports.default = UpdateProfileService;