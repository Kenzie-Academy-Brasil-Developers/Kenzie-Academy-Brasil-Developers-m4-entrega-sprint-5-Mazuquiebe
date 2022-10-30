import { Request, Response } from 'express';
import { AppError, handleErrorFunction } from '../../error/appError';
import { createScheduleService } from '../../services/schedulesServices/createSchedule.service';
import { IScheduleRequest } from '../../interfaces/schedules/index';

const createScheduleController = async (request:Request, response:Response) =>{
  
  const schedule:IScheduleRequest = request.body;
  const { id } = request.user;

  try {
    
    const newSchedule = await createScheduleService( schedule, id );
    return response.status(201).json(newSchedule);

  } 
  catch (error) {

    if( error instanceof AppError ){ return handleErrorFunction(error, response); };
    
  };
}; 
export default createScheduleController;