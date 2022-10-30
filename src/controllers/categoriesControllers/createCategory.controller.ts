import { Request, Response } from 'express';
import { AppError, handleErrorFunction } from '../../error/appError';
import { ICategoryRequest } from '../../interfaces/categories';
import { createCategoryService } from '../../services/categoryServices/createCategory.service';

const createCategoryController = async (request:Request, response:Response)=>{

  try {
    const category:ICategoryRequest = request.body;

    const newCategory = await createCategoryService(category);

    return response.status(201).json(newCategory);

  } 
  catch (error) {

    if( error instanceof AppError ){ return handleErrorFunction(error, response); };
  }

};
export default createCategoryController;