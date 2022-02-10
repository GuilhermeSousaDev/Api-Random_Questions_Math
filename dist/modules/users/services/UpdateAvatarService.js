"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _crypto = _interopRequireDefault(require("crypto"));

var _tsyringe = require("tsyringe");

var _IUserRepository = require("../domain/repositories/IUserRepository");

var _dec, _dec2, _dec3, _dec4, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let UpdateUserAvatarService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('userRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IUserRepository.IUserRepository === "undefined" ? Object : _IUserRepository.IUserRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class UpdateUserAvatarService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute({
    id,
    avatar
  }) {
    const user = await this.userRepository.findById(id);

    if (user.avatar) {
      const fileExists = _fs.default.statSync(`uploads/${user.avatar}`);

      if (fileExists) {
        _fs.default.unlinkSync(`uploads/${user.avatar}`);
      }
    }

    const hash = _crypto.default.randomBytes(10).toString('hex');

    const filenameHash = `${hash}-${avatar.filename}`;

    _fs.default.writeFileSync(`uploads/${filenameHash}`, avatar.buffer);

    user.avatar = filenameHash;
    await this.userRepository.save(user);
    return user;
  }

}) || _class) || _class) || _class) || _class);
exports.default = UpdateUserAvatarService;