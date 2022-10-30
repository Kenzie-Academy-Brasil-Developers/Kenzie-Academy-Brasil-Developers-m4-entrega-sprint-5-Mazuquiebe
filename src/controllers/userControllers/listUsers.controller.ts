import { Request, Response } from "express";
import { listUsersService } from "../../services/userServices/listUsers.service";

const listUsersController = async (request:Request, response:Response) => {
    const {id} = request.params;

    try{
        return response.status(200).json( await listUsersService(id) );
    }
    catch(error){
        if(error instanceof Error){ 
            return response.status(403).json({message: error.message});
        };
    };
};
export default listUsersController;