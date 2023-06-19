import express from 'express';
import { UserRouter } from '../modules/user/user.route';
import { CowRoutes } from '../modules/cow/cow.route';
import { OrderRoutes } from '../modules/order/order.route';

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
  {
    path: '/orders',
    route: OrderRoutes,
  },
];
moduleRoutes.forEach(route => appRouter.use(route.path, route.route));

export default appRouter;
