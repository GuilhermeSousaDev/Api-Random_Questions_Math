import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import isAuthenticated from '../../../../../shared/infra/http/middlewares/isAuthenticated';
import HitsQuestionController from '../controllers/HitsQuestionController';

const hitsQuestionRouter = Router();

const hitsQuestionController = new HitsQuestionController();

hitsQuestionRouter.get('/', hitsQuestionController.index);
hitsQuestionRouter.get('/:id', hitsQuestionController.show);
hitsQuestionRouter.post(
    '/',
    isAuthenticated,
    celebrate({
        [Segments.BODY]: {
            hitsBhaskara: Joi.number().required(),
            hitsPitagoras: Joi.number().required(),
            hitsVelmedia: Joi.number().required(),
        }
    }),
    hitsQuestionController.create,
);

hitsQuestionRouter.delete(
    '/:id', 
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().required(),
        }
    }),
    hitsQuestionController.delete,
);

export default hitsQuestionRouter;