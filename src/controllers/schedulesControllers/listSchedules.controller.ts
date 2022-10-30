import { Request, Response } from 'express';
import { AppError, handleErrorFunction } from '../../error/appError';
import { listSchedulesService } from '../../services/schedulesServices/listSchedules.service';

const listSchedulesController = async (request:Request, response:Response)=>{

  const { id } = request.params; 

  try {
    
    const schedules = await listSchedulesService(id);
    return response.status(200).json(schedules);

  } 
  catch (error) {

    if(error instanceof AppError){ return handleErrorFunction( error, response ) };
  };
}; 
export default listSchedulesController;
