import AppDataSource from "../../data-source";
import { AdressesEntity } from "../../entities/adresses.entity";
import { CategoriesEntity } from "../../entities/categories.entity";
import { PropertyEntity } from "../../entities/property.entity";
import { AppError } from "../../error/appError";
import { IPropertyRequest } from "../../interfaces/properties";


const createPropertyService = async (property:IPropertyRequest):Promise<PropertyEntity> => {
  
  const { address, categoryId, size, value } = property;
  const { state, city, district, zipCode, number } = address;

  const propertiesRepo = AppDataSource.getRepository(PropertyEntity);
  const addressRepo = AppDataSource.getRepository(AdressesEntity);
  const addressAlreadyInUse = await addressRepo.findOneBy({
    city: city,
    state: state,
    district: district,
    number: number
  });

  if( addressAlreadyInUse ){ 
    throw new AppError( 400, "Property is allready registered!" ) 
  }; 

  if(state.length > 2 ){ throw new AppError(400, "Invalid state!" ) }

  const categoryRepo = AppDataSource.getRepository(CategoriesEntity);
  const category = await categoryRepo.findOneBy({ id: categoryId });

  if( !category ){ throw new AppError(404, "CategoryId is invalid!") };

  const newAddress = addressRepo.create({ 
    state:    state,
    city:     city,
    district: district,
    zipCode:  zipCode,
    number:   number, 
  })
  await addressRepo.save(newAddress);
  
  const newProperty = propertiesRepo.create({
    size:   size,
    value:  value,
    address: newAddress,
    category: category as CategoriesEntity,
  });

  await propertiesRepo.save(newProperty);

  return newProperty;

};
export { createPropertyService };