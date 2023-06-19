"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const order_model_1 = require("./order.model");
const cow_model_1 = require("../cow/cow.model");
const user_model_1 = __importDefault(require("../user/user.model"));
const createOrder = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const buyer = yield user_model_1.default.findById(data.buyer);
    const cow = yield cow_model_1.Cow.findById(data.cow);
    if (!buyer) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Buyer not found');
    }
    if (!cow) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Cow not found');
    }
    const seller = yield user_model_1.default.findById(cow.seller);
    if (!seller) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'seller not found!');
    }
    if (cow.label === 'sold out') {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'cow already sold out!');
    }
    if (cow.price > buyer.budget) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'budget is not enough to buy this cow!');
    }
    yield user_model_1.default.findOneAndUpdate({ _id: cow.seller }, { income: seller.income + cow.price });
    yield user_model_1.default.findOneAndUpdate({ _id: data.buyer }, { budget: buyer.budget - cow.price });
    yield cow_model_1.Cow.findOneAndUpdate({ _id: data.cow }, { label: 'sold out' });
    const result = yield order_model_1.Order.create(data);
    return result;
});
const getAllOrder = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.find().populate('cow').populate('buyer');
    return result;
});
exports.OrderService = {
    createOrder,
    getAllOrder,
};
