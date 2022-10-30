import AppDataSource from "../../data-source"; 
import { PropertyEntity } from "../../entities/property.entity";

export const listPropertiesService = async ():Promise<PropertyEntity[]> =>{
  
  const propertiesRepo = AppDataSource.getRepository(PropertyEntity);
  const properties = await propertiesRepo.find()

  return properties;
};  
