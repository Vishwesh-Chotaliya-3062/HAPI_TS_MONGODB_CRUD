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
exports.routes = void 0;
const User_1 = __importDefault(require("../models/User"));
const user_controller_1 = require("../controllers/user.controller");
const routes = (server) => {
    server.route({
        method: 'POST',
        path: '/users',
        handler: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const payload = request.payload;
                const user = new User_1.default(payload);
                yield user.save();
                return response.response(user);
            }
            catch (error) {
                return response.response(error).code(500);
            }
        })
    });
    server.route({
        method: 'GET',
        path: '/users',
        handler: user_controller_1.getUsers
    });
    server.route({
        method: 'GET',
        path: '/users/{id}',
        handler: user_controller_1.getUser
    });
    server.route({
        method: 'PUT',
        path: '/users/{id}',
        handler: user_controller_1.updateUser
    });
    server.route({
        method: 'DELETE',
        path: '/users/{id}',
        handler: user_controller_1.deleteUser
    });
};
exports.routes = routes;
