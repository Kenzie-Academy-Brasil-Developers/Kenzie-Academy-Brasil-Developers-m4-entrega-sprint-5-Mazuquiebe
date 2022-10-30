import { Request, Response } from "express";
import { updateUserService }  from "../../services/userServices/updateUser.service";
import { AppError, handleErrorFunction } from "../../error/appError";

const updateUserController = async (request:Request, response:Response) => {

    const { id } = request.params;
    const updates = request.body;

    try {
        const updatedUser = await updateUserService(updates, id);
        return response.status(200).json(updatedUser);
    } 
    catch (error) {

        if( error instanceof AppError ){ return handleErrorFunction(error, response); };
    };
};
export default updateUserController;