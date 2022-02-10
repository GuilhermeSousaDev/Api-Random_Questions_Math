"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HitsQuestionRepository = void 0;

var _typeorm = require("typeorm");

var _Hits = require("../entities/Hits");

class HitsQuestionRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = (0, _typeorm.getRepository)(_Hits.HitsQuestions);
  }

  async create({
    hitsBhaskara,
    hitsPitagoras,
    hitsVelmedia,
    user,
    userId
  }) {
    const hitsQuestions = this.ormRepository.create({
      hitsBhaskara,
      hitsPitagoras,
      hitsVelmedia,
      user,
      userId
    });
    return hitsQuestions;
  }

  async remove(hitsQuestions) {
    return this.ormRepository.remove(hitsQuestions);
  }

  async save(hitsQuestions) {
    return this.ormRepository.save(hitsQuestions);
  }

  async find() {
    return this.ormRepository.find();
  }

  async findAndCount() {
    return this.ormRepository.findAndCount();
  }

  async findUserById(userId) {
    const userHitsQuestion = await this.ormRepository.findOne({
      where: {
        userId
      }
    });
    return userHitsQuestion;
  }

  async findById(id) {
    const userHitsQuestion = await this.ormRepository.findOne(id);
    return userHitsQuestion;
  }

  async findWithOffsetAndLimit({
    limit,
    offset
  }) {
    const hitsQuestions = await this.ormRepository.find({
      order: {
        hitsBhaskara: "DESC",
        hitsPitagoras: "DESC",
        hitsVelmedia: "DESC"
      },
      take: limit,
      skip: offset
    });
    return hitsQuestions;
  }

  async findTopBhaskara() {
    const topHitQuestionBhaskara = await this.ormRepository.find({
      select: ['id', 'user', 'createdAt', 'updatedAt', 'hitsBhaskara'],
      order: {
        hitsBhaskara: "DESC"
      },
      take: 50
    });
    return topHitQuestionBhaskara;
  }

  async findTopPitagoras() {
    const topHitQuestionPitagoras = await this.ormRepository.find({
      select: ['id', 'user', 'createdAt', 'updatedAt', 'hitsPitagoras'],
      order: {
        hitsPitagoras: "DESC"
      },
      take: 50
    });
    return topHitQuestionPitagoras;
  }

  async findTopVelmedia() {
    const topHitQuestionVelmedia = await this.ormRepository.find({
      select: ['id', 'user', 'createdAt', 'updatedAt', 'hitsVelmedia'],
      order: {
        hitsVelmedia: "DESC"
      },
      take: 50
    });
    return topHitQuestionVelmedia;
  }

  async findAll() {
    const listHitQuestions = await this.ormRepository.find();
    const hitQuestions = listHitQuestions.map(({
      id,
      user,
      hitsBhaskara,
      hitsPitagoras,
      hitsVelmedia,
      createdAt
    }) => ({
      id,
      user: user.name,
      userId: user.id,
      hits: hitsBhaskara + hitsPitagoras + hitsVelmedia,
      createdAt
    })).sort((a, b) => b.hits - a.hits);
    return hitQuestions;
  }

}

exports.HitsQuestionRepository = HitsQuestionRepository;