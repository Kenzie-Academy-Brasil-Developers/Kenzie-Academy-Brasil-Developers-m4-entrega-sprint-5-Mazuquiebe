import AppDataSource from '../../data-source';
import { PropertyEntity } from '../../entities/property.entity';
import { ScheduleUsersProperties } from '../../entities/schedules.entity';
import { UserEntity } from '../../entities/user.entity';
import { AppError } from '../../error/appError';
import { IScheduleRequest } from '../../interfaces/schedules';

const createScheduleService = async ({date, hour, propertyId}:IScheduleRequest, userId:string):Promise<{
  message: string;
  schedules: ScheduleUsersProperties;
}> =>{
  
  const schedulesRepo = AppDataSource.getRepository(ScheduleUsersProperties);
  const scheduleIsUnavailable = await schedulesRepo.findOneBy({
    date: date,
    hour: hour
  });

  const userRepo = AppDataSource.getRepository(UserEntity);
  const propertyRepo = AppDataSource.getRepository(PropertyEntity);
  const user = await userRepo.findOneBy({ id: userId });
  const property = await propertyRepo.findOneBy({ id: propertyId });

  if( !property ){ throw new AppError(404, "Property not found, maybe it not exists!")};

  if(scheduleIsUnavailable){ throw new AppError( 400, "Schedule is unavailable!" );};

  const day = new Date(date).getDay();
  if(day === 0 || day === 6 ){ throw new AppError(400, "Schedules avilable only monday to friday")};

  const h = Number(hour.split(':')[0]);
  if( h>=18 || h < 8){ throw new AppError(400, "Appointment time from 8:00 to 18:00!");};


  const newSchedule = schedulesRepo.create({
    date: date,
    hour: hour,
    user: user as UserEntity,
    property: property,

  });

  await schedulesRepo.save(newSchedule);

  return { message:"Scheduled visit!", schedules: newSchedule};
};
export { createScheduleService };