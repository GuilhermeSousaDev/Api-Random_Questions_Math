import { Router } from 'express';
import TopHitQuestionBhaskaraController from '../controllers/TopHitQuestionBhaskaraController';
import TopHitQuestionPitagorasController from '../controllers/TopHitQuestionPitagorasController';
import TopHitQuestionVelmediaController from '../controllers/TopHitQuestionVelmediaController';

const topHitQuestionRouter = Router();

const topHitQuestionBhaskaraController = new TopHitQuestionBhaskaraController();
const topHitQuestionPitagorasController = new TopHitQuestionPitagorasController();
const topHitQuestionVelmediaController = new TopHitQuestionVelmediaController();

topHitQuestionRouter.get(
    '/bhaskara', 
    topHitQuestionBhaskaraController.index,
);

topHitQuestionRouter.get(
    '/pitagoras', 
    topHitQuestionPitagorasController.index,
);

topHitQuestionRouter.get(
    '/vel_media', 
    topHitQuestionVelmediaController.index,
);

export default topHitQuestionRouter;