import { Request, Response } from 'express';
import { AppError, handleErrorFunction } from '../../error/appError';
import { listCategoriesService } from '../../services/categoryServices/listCategories.service';

const listCategoriesController = async (request:Request, response:Response) =>{
  const { id } = request.params;
  try {
    
    const categories = await listCategoriesService(id);

    return response.status(200).json(categories);
  
  } 
  catch (error) {

    if( error instanceof AppError ){ return handleErrorFunction( error, response ); };

  };
}; 
export default listCategoriesController;