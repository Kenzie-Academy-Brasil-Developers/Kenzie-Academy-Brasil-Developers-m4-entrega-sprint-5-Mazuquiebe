import AppDataSource from "../../data-source";
import { ScheduleUsersProperties } from "../../entities/schedules.entity";
import { AppError } from "../../error/appError";

const listSchedulesService = async (id:string):Promise<{
  schedules: ScheduleUsersProperties[];
}> => {
  
  const schedulesRepo = AppDataSource.getRepository(ScheduleUsersProperties);
  const schedules = await schedulesRepo.findBy( {property:{id:id}});

  if(schedules.length === 0){ throw new AppError(404, "No schedules were found for this property!")}
  
  return {schedules: schedules};
};

export { listSchedulesService };