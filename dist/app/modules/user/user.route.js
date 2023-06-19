"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const user_validate_1 = require("./user.validate");
const userRouter = express_1.default.Router();
userRouter.post('/create-user', (0, validateRequest_1.default)(user_validate_1.UserValidation.createUserZodSchema), user_controller_1.UserController.createUser);
userRouter.get('/:id', user_controller_1.UserController.getSingleUser);
userRouter.patch('/:id', (0, validateRequest_1.default)(user_validate_1.UserValidation.updateUserZodSchema), user_controller_1.UserController.updateUser);
userRouter.delete('/:id', user_controller_1.UserController.deleteUser);
userRouter.get('/', user_controller_1.UserController.getAllUser);
exports.UserRouter = userRouter;
