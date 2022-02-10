"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _UpdateProfileService = _interopRequireDefault(require("../../../services/UpdateProfileService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProfileController {
  async update(req, res) {
    try {
      const id = req.user.id;
      const {
        name,
        email,
        password,
        old_password
      } = req.body;

      const updateProfile = _tsyringe.container.resolve(_UpdateProfileService.default);

      const profile = await updateProfile.execute({
        id,
        name,
        email,
        password,
        old_password
      });
      return res.json(profile);
    } catch (error) {
      return res.json(error.message);
    }
  }

}

exports.default = ProfileController;