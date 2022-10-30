import AppDataSource from "../../data-source";
import { UserEntity } from "../../entities/user.entity";
import { IUser } from "../../interfaces/users";
import { getUserDataOrThrowAnError } from "./getUserDataOrThrowAnError.service";
import { hidePassword } from './hidePassword.service'

const listUsersService = async (id:string | null):Promise<IUser[]| IUser> => {
    
    const usersRepo = AppDataSource.getRepository(UserEntity);
   
    if(!id){
        
       const users = await usersRepo.find();
       const noPasswordUsers: string | IUser | IUser[] | PromiseLike<string | IUser | IUser[]> = [];
       
       if(users.length > 0){
            users.map( u => noPasswordUsers.push( hidePassword(u) )
            )
            return noPasswordUsers;
       };
       return users
    };

    const {user} = await getUserDataOrThrowAnError(id)
    
    return hidePassword(user);
};
export { listUsersService };