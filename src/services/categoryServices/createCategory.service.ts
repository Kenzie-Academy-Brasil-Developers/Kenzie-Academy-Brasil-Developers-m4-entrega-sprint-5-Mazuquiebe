import { CategoriesEntity } from "../../entities/categories.entity";
import AppDataSource from "../../data-source";
import { ICategoryRequest } from "../../interfaces/categories";
import { AppError } from "../../error/appError";

const createCategoryService = async ({ name }:ICategoryRequest):Promise<CategoriesEntity> =>{

  const categoryRepo = AppDataSource.getRepository(CategoriesEntity);
  const categoryAllreadyExists = await categoryRepo.findOneBy({ name: name });
  
  if( categoryAllreadyExists ){ throw new AppError(400, "Category allready exists!"); };

  const newCategory = categoryRepo.create({ name: name });

  await categoryRepo.save(newCategory);
  
  return newCategory;
  
};
export { createCategoryService };