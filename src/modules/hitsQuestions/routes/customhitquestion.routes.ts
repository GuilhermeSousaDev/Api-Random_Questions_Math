import { Router } from 'express';
import CustomhitsQuestionController from '../controllers/CustomHitQuestionController';

const customHitQuestionRouter = Router();

const customhitsQuestionController = new CustomhitsQuestionController();

customHitQuestionRouter.get('/hits', customhitsQuestionController.index);

export default customHitQuestionRouter;