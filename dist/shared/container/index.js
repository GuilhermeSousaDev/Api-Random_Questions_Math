"use strict";

var _tsyringe = require("tsyringe");

var _HitsQuestionRepository = require("../../modules/hitsQuestions/infra/typeorm/repositories/HitsQuestionRepository");

var _UserRepository = require("../../modules/users/infra/typeorm/repositories/UserRepository");

_tsyringe.container.registerSingleton('userRepository', _UserRepository.UserRepository);

_tsyringe.container.registerSingleton('hitsQuestionRepository', _HitsQuestionRepository.HitsQuestionRepository);