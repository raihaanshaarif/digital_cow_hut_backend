import express from 'express';
import { UserRouter } from '../modules/user/user.route';

const appRouter = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRouter,
  },
];
moduleRoutes.forEach(route => appRouter.use(route.path, route.route));

export default appRouter;
