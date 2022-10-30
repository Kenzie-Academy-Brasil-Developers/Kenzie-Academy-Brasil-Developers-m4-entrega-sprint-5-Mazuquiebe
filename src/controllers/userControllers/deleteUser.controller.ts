import { deleteUserService } from "../../services/userServices/deleteUser.service";
import { Request, Response } from "express";
import { AppError, handleErrorFunction} from "../../error/appError";

const deleteUserController = async (request:Request, response:Response) =>{
    const { id } = request.params;
    try {
        await deleteUserService(id);
        
        return response.status(204).json();
    } 
    catch (error) {
        if(error instanceof AppError){
            return handleErrorFunction(error, response);
        };
    };
};
export default deleteUserController;