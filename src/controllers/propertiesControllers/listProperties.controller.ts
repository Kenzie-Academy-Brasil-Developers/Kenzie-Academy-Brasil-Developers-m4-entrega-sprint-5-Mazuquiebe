import { Request, Response } from 'express'
import { AppError, handleErrorFunction } from '../../error/appError';
import { listPropertiesService } from '../../services/propertiesServices/listProperties.service'

const listPropertiesController = async (request:Request, response:Response) =>{

  try {
    const properties = await listPropertiesService();
    return response.status(200).json(properties);
  } 
  catch (error) {
    if(error instanceof AppError){ return handleErrorFunction(error, response); };
  };
};
export default listPropertiesController;