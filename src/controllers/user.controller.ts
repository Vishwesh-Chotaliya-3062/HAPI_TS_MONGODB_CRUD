import { Request, ResponseToolkit, ResponseObject } from "@hapi/hapi";
import User from "../models/User";

export const createUser = async (request: Request, response: ResponseToolkit):
Promise<ResponseObject> => {
    try{
        const payload:{} = request.payload;
        const user = new User(payload);
        await user.save();
        return response.response(user);
    } catch (error) {
        return response.response(error).code(500);
    }
}

export const getUsers = async (request: Request, response: ResponseToolkit):
Promise<ResponseObject> => {
    try{
        const users = await User.find();
        return response.response(users);
    } catch (error) {
        return response.response(error).code(500);
    }
}

export const getUser = async (request: Request, response: ResponseToolkit):
Promise<ResponseObject> => {
    try{
        const userFound = await User.findById(request.params.id);
        if(userFound) {
            return response.response(userFound);
        }
        return response.response("User not found").code(404);
    } catch (error) {
        return response.response(error).code(500);
    }
}

export const updateUser = async (request: Request, response: ResponseToolkit):
Promise<ResponseObject> => {
    try{
        const payload:{} = request.payload;
        const updatedUser = await User.findByIdAndUpdate(
            request.params.id,
            payload,
            {
                new: true,
                'useFindAndModify': false 
            },
        );
        if(updatedUser) {
            return response.response(updatedUser);
        }
        return response.response("User not found").code(404);
    } catch (error) {
        return response.response(error).code(500);
    }
}

export const deleteUser = async (request: Request, response: ResponseToolkit):
Promise<ResponseObject> => {
    try{
        const deletedUser = await User.findByIdAndDelete(request.params.id);
        if(deletedUser) {
            return response.response(deletedUser);
        }
        return response.response("User not found").code(404);
    } catch (error) {
        return response.response(error).code(500);
    }
}