import { AppError } from "../../error/appError";
import { getUserDataOrThrowAnError } from "./getUserDataOrThrowAnError.service";

const deleteUserService = async (id:string) => {
    const data = await getUserDataOrThrowAnError(id)

    const {user, userRepo} = data;
    const {isActive} = user;

    if(!isActive){
        throw new AppError(400,"User is not active!");
    }; 

    await userRepo.update(id,{ isActive: false });

};
export { deleteUserService };