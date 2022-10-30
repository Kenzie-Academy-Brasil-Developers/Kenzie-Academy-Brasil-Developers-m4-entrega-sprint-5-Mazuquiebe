import { Response } from "express";

class AppError extends Error {
    statusCode;

    constructor(statusCode:number, message:string){
        super()
        this.statusCode = statusCode;
        this.message = message;

    };
};

const handleErrorFunction = (error: AppError, response:Response) =>{
    
    const { statusCode, message } = error;

    return response.status(statusCode).json({
        status: "error",
        statusCode,
        message
    });
};
export { AppError, handleErrorFunction };