import { Router } from 'express';
import customHitQuestionRouter from '../../../../modules/hitsQuestions/infra/http/routes/customhitquestion.routes';
import hitsQuestionRouter from '../../../../modules/hitsQuestions/infra/http/routes/hitsquestion.routes';
import topHitQuestionRouter from '../../../../modules/hitsQuestions/infra/http/routes/tophitquestion.routes';
import sessionRouter from '../../../../modules/users/infra/http/routes/session.routes';
import tokenRouter from '../../../../modules/users/infra/http/routes/token.routes';
import userRouter from '../../../../modules/users/infra/http/routes/user.routes';

const router = Router();

router.use('/user', userRouter);
router.use('/question', hitsQuestionRouter);
router.use('/custom', customHitQuestionRouter);
router.use('/top', topHitQuestionRouter);
router.use('/token', tokenRouter);
router.use('/login', sessionRouter);

export default router;