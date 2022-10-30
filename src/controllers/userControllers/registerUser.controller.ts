import { Request, Response } from "express";
import { AppError, handleErrorFunction } from "../../error/appError";
import { IUserRequest } from "../../interfaces/users";
import { registerUserService } from "../../services/userServices/registerUser.service";

const registerUserController = async (request:Request, response:Response) =>{
    const user:IUserRequest = request.body;
    try{
        const newUser = await registerUserService(user);
        return response.status(201).json(newUser);
    }
    catch(error){   
        if(error instanceof AppError){ 
            return handleErrorFunction(error, response);
        };
    };

};
export default registerUserController;