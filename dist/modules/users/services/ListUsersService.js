"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _IUserRepository = require("../domain/repositories/IUserRepository");

var _dec, _dec2, _dec3, _dec4, _class;

let ListUsersService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('userRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IUserRepository.IUserRepository === "undefined" ? Object : _IUserRepository.IUserRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class ListUsersService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute() {
    const user = await this.userRepository.findAll();
    return user;
  }

}) || _class) || _class) || _class) || _class);
exports.default = ListUsersService;