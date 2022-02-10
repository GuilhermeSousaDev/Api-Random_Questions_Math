"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _UpdateAvatarService = _interopRequireDefault(require("../../../services/UpdateAvatarService"));

var _tsyringe = require("tsyringe");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UserAvatarController {
  async update(req, res) {
    try {
      const id = req.user.id;
      const filename = req.file.originalname;
      const buffer = req.file.buffer;

      const updateAvatarService = _tsyringe.container.resolve(_UpdateAvatarService.default);

      const user = await updateAvatarService.execute({
        id,
        avatar: {
          filename,
          buffer
        }
      });
      return res.json(user);
    } catch (error) {
      return res.json(error.message);
    }
  }

}

exports.default = UserAvatarController;