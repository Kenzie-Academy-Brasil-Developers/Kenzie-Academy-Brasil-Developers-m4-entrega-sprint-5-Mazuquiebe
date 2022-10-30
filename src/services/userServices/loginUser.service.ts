import { IUserLogin } from "../../interfaces/users";
import AppDataSource from "../../data-source";
import { UserEntity } from "../../entities/user.entity";
import jwt from "jsonwebtoken";
import { compare } from "bcryptjs";
import { AppError } from "../../error/appError";

const loginService = async ( data:IUserLogin ):Promise<string> =>  {

    const { email, password } = data;
    const userRepo = AppDataSource.getRepository(UserEntity);
    const user = await userRepo.findOneBy({email});
    
    if(!user){
        throw new AppError(403, "Email or password invalid!");
    };
      
    if(!password){
        throw new AppError(403, "Email or password invalid!");
    };

    const comparedPassword = await compare(password, user.password);

    if(!comparedPassword){
        throw new AppError(403,"Email or password invalid!");
    };

    const token = jwt.sign({
        isAdm: user.isAdm
    },
    process.env.SECRET_KEY as string,
    { 
        expiresIn: '24h', 
        subject: user.id,

    });
    return token;
};
export { loginService };