import { Router } from 'express';
import customHitQuestionRouter from '../../../../modules/hitsQuestions/infra/http/routes/customhitquestion.routes';
import hitsQuestionRouter from '../../../../modules/hitsQuestions/infra/http/routes/hitsquestion.routes';
import topHitQuestionRouter from '../../../../modules/hitsQuestions/infra/http/routes/tophitquestion.routes';
import profileRouter from '../../../../modules/users/infra/http/routes/profile.routes';
import sessionRouter from '../../../../modules/users/infra/http/routes/session.routes';
import tokenRouter from '../../../../modules/users/infra/http/routes/token.routes';
import userRouter from '../../../../modules/users/infra/http/routes/user.routes';
import userAvatarRouter from '../../../../modules/users/infra/http/routes/user_avatar.routes';

const router = Router();

router.use('/question', hitsQuestionRouter);
router.use('/custom', customHitQuestionRouter);
router.use('/top', topHitQuestionRouter);

router.use('/user', userRouter);
router.use('/token', tokenRouter);
router.use('/avatar', userAvatarRouter);
router.use('/profile', profileRouter);
router.use('/login', sessionRouter);

export default router;