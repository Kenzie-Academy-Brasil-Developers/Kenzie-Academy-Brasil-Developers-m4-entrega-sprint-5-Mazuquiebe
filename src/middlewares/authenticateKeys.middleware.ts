import e, { Request, Response, NextFunction } from "express";
import { IUserUpdate } from "../interfaces/users";

const authenticateKeysMiddleware = (request:Request, response:Response, next:NextFunction) =>{
    
    const user:IUserUpdate = request.body;
    const userKeys = Object.keys(user)
    const nonAuthorizedKeys = ["isadm", "isactive","id"];
    
    userKeys.map(k =>{
        if(nonAuthorizedKeys.includes(k.toLowerCase())){
            return response.status(401).json({message: "Invalid fields!"})
        };
    });
    return next()
};

export default authenticateKeysMiddleware;