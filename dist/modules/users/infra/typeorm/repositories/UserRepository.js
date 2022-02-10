"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserRepository = void 0;

var _typeorm = require("typeorm");

var _User = require("../entities/User");

class UserRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = (0, _typeorm.getRepository)(_User.User);
  }

  async save(user) {
    return this.ormRepository.save(user);
  }

  async remove(user) {
    return this.ormRepository.remove(user);
  }

  async create({
    name,
    email,
    password
  }) {
    const user = this.ormRepository.create({
      name,
      email,
      password
    });
    return user;
  }

  async findAll() {
    const users = this.ormRepository.find({
      select: ['id', 'name', 'email'],
      order: {
        createdAt: "DESC"
      },
      take: 10
    });
    return users;
  }

  async findById(id) {
    const user = await this.ormRepository.findOne(id);
    return user;
  }

  async findByEmail(email) {
    const userEmail = await this.ormRepository.findOne({
      where: {
        email
      }
    });
    return userEmail;
  }

}

exports.UserRepository = UserRepository;