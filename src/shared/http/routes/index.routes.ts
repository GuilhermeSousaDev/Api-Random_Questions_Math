import { Router } from 'express';
import customHitQuestionRouter from '../../../modules/hitsQuestions/routes/customhitquestion.routes';
import hitsQuestionRouter from '../../../modules/hitsQuestions/routes/hitsquestion.routes';
import topHitQuestionRouter from '../../../modules/hitsQuestions/routes/tophitquestion.routes';
import sessionRouter from '../../../modules/users/routes/session.routes';
import tokenRouter from '../../../modules/users/routes/token.routes';
import userRouter from '../../../modules/users/routes/user.routes';

const router = Router();

router.use('/user', userRouter);
router.use('/question', hitsQuestionRouter);
router.use('/question/custom', customHitQuestionRouter);
router.use('/top', topHitQuestionRouter);
router.use('/token', tokenRouter);
router.use('/login', sessionRouter);

export default router;