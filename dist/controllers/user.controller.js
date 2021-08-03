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
exports.deleteUser = exports.updateUser = exports.getUser = exports.getUsers = void 0;
const User_1 = __importDefault(require("../models/User"));
const getUsers = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield User_1.default.find();
        return response.response(users);
    }
    catch (error) {
        return response.response(error).code(500);
    }
});
exports.getUsers = getUsers;
const getUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userFound = yield User_1.default.findById(request.params.id);
        if (userFound) {
            return response.response(userFound);
        }
        return response.response("User not found").code(404);
    }
    catch (error) {
        return response.response(error).code(500);
    }
});
exports.getUser = getUser;
const updateUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = request.payload;
        const updatedUser = yield User_1.default.findByIdAndUpdate(request.params.id, payload, {
            new: true,
            'useFindAndModify': false
        });
        if (updatedUser) {
            return response.response(updatedUser);
        }
        return response.response("User not found").code(404);
    }
    catch (error) {
        return response.response(error).code(500);
    }
});
exports.updateUser = updateUser;
const deleteUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedUser = yield User_1.default.findByIdAndDelete(request.params.id);
        if (deletedUser) {
            return response.response(deletedUser);
        }
        return response.response("User not found").code(404);
    }
    catch (error) {
        return response.response(error).code(500);
    }
});
exports.deleteUser = deleteUser;
