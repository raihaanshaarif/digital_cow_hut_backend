import express from 'express';
import { UserRouter } from '../modules/user/user.route';
import { CowRoutes } from '../modules/cow/cow.route';

const appRouter = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRouter,
  },
  {
    path: '/cows',
    route: CowRoutes,
  },
];
moduleRoutes.forEach(route => appRouter.use(route.path, route.route));

export default appRouter;
