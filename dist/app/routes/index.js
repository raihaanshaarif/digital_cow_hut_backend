"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = require("../modules/user/user.route");
const cow_route_1 = require("../modules/cow/cow.route");
const order_route_1 = require("../modules/order/order.route");
const appRouter = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/users',
        route: user_route_1.UserRouter,
    },
    {
        path: '/cows',
        route: cow_route_1.CowRoutes,
    },
    {
        path: '/orders',
        route: order_route_1.OrderRoutes,
    },
];
moduleRoutes.forEach(route => appRouter.use(route.path, route.route));
exports.default = appRouter;
