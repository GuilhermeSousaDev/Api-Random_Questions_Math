"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CreateUserService = _interopRequireDefault(require("../../../services/CreateUserService"));

var _DeleteUserService = _interopRequireDefault(require("../../../services/DeleteUserService"));

var _ListUsersService = _interopRequireDefault(require("../../../services/ListUsersService"));

var _ShowUserService = _interopRequireDefault(require("../../../services/ShowUserService"));

var _tsyringe = require("tsyringe");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UserController {
  async index(req, res) {
    const listUser = _tsyringe.container.resolve(_ListUsersService.default);

    const user = await listUser.execute();
    return res.json(user);
  }

  async show(req, res) {
    const {
      id
    } = req.params;

    const showUser = _tsyringe.container.resolve(_ShowUserService.default);

    const user = await showUser.execute(id);
    return res.json(user);
  }

  async create(req, res) {
    try {
      const {
        name,
        email,
        password
      } = req.body;

      const createUser = _tsyringe.container.resolve(_CreateUserService.default);

      const user = await createUser.execute({
        name,
        email,
        password
      });
      return res.json(user);
    } catch (error) {
      return res.json(error.message);
    }
  }

  async delete(req, res) {
    const {
      id
    } = req.params;

    const deleteUser = _tsyringe.container.resolve(_DeleteUserService.default);

    await deleteUser.execute(id);
    return res.json({
      message: 'Deletado com Sucesso'
    });
  }

}

exports.default = UserController;