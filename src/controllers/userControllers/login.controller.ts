import { Request, Response } from "express";
import { AppError,handleErrorFunction } from "../../error/appError";
import { IUserLogin } from "../../interfaces/users";
import { loginService } from "../../services/userServices/loginUser.service";

const loginController = async (request:Request, response:Response) => {
    const data:IUserLogin = request.body
    try {
        const token = await loginService(data);
        
        return response.status(200).json({token: token});
    } 
    catch (error) {
      if(error instanceof AppError){ 
            return handleErrorFunction(error, response);
        };
    };
}; 
export  default loginController;