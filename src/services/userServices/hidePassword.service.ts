import { AppError } from "../../error/appError";
import { IUser } from "../../interfaces/users";

interface IUserEntity extends IUser{
    isActive: boolean
};

const hidePassword = (user:IUserEntity | null) => {
    if(!user){
        throw new AppError(404,"User does not exists")
    };
       
    const {
        id, 
        name, 
        email, 
        isActive, 
        isAdm, 
        createdAt, 
        updatedAt
    } = user;

    return {
        id, 
        name, 
        email, 
        isActive, 
        isAdm, 
        createdAt, 
        updatedAt
    };
};
export { hidePassword };