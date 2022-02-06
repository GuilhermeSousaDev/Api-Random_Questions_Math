import { container } from 'tsyringe';
import { IHitsQuestionsRepository } from '../../modules/hitsQuestions/domain/repositories/IHitsQuestionRepository';
import { HitsQuestionRepository } from '../../modules/hitsQuestions/infra/typeorm/repositories/HitsQuestionRepository';
import { IUserRepository } from '../../modules/users/domain/repositories/IUserRepository';
import { UserRepository } from '../../modules/users/infra/typeorm/repositories/UserRepository';

container.registerSingleton<IUserRepository>(
    'userRepository',
    UserRepository,
);

container.registerSingleton<IHitsQuestionsRepository>(
    'hitsQuestionRepository',
    HitsQuestionRepository,
);