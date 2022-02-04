import { Router} from 'express';
import isAuthenticated from '../../../../../shared/infra/http/middlewares/isAuthenticated';
import TokenController from '../controllers/TokenController';

const tokenRouter = Router();

const tokenController = new TokenController();

tokenRouter.get('/', isAuthenticated, tokenController.index);

export default tokenRouter;