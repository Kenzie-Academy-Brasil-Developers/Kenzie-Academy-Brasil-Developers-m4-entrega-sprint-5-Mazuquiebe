import { Request, Response } from 'express'
import { createPropertyService } from '../../services/propertiesServices/createProperty.service';
import { IPropertyRequest } from '../../interfaces/properties/index';
import { AppError, handleErrorFunction } from '../../error/appError';

const createPropeertyController = async (request:Request, response:Response) => {
  
  const property:IPropertyRequest = request.body;

  try {
    
    const newProperty = await createPropertyService(property) ; 
    return response.status(201).json(newProperty);

  } 
  catch (error) {

    if(error instanceof AppError){ return handleErrorFunction(error, response); };
    
  };
};

export default createPropeertyController;