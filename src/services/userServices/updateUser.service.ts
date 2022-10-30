import { IUser, IUserUpdate } from "../../interfaces/users";
import { hidePassword } from "./hidePassword.service";
import { AppError } from "../../error/appError";
import { getUserDataOrThrowAnError } from "./getUserDataOrThrowAnError.service";
import { hashSync } from "bcryptjs";

const updateUserService = async ({name, email, password}:IUserUpdate, id:string):Promise<IUser> =>{

    const { user, userRepo } = await getUserDataOrThrowAnError(id);

    if(!user){ throw new AppError(400, "User does not exists!"); };
    
    await userRepo.update( 
        id,
        {
            name: name && name,
            email: email && email,
            password: password && hashSync(password,10)
        }
    );

    const newUser = await userRepo.findOneBy({id});

    return hidePassword(newUser);
}; 
export  { updateUserService };