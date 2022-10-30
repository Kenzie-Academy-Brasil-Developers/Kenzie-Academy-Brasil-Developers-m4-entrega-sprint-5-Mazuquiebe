import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { UserEntity } from "../../entities/user.entity";
import { AppError } from "../../error/appError";

const getUserDataOrThrowAnError = async (id:string):Promise<{
    user: UserEntity;
    userRepo: Repository<UserEntity>;
}> =>{

    const userRepo = AppDataSource.getRepository(UserEntity);
    const user = await userRepo.findOneBy({id:id});

    if(!user){ throw new AppError(404,"User Not found!");};

    return {user, userRepo};
};
export { getUserDataOrThrowAnError };