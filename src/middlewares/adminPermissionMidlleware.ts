import { Request, Response, NextFunction } from "express";

const adminPermissionMiddleware = (request:Request, response:Response, next:NextFunction) => {
    const { id:idParams } = request.params;
    const { isAdm, id } = request.user;

    if(!isAdm){

        // if(idParams !== undefined && id === idParams){
        //     return next();
        // };

        return response.status(403).json(
            {
                message: "Missing admin permissions"
            }
        );
    };
    
    return next();
};
export default adminPermissionMiddleware;