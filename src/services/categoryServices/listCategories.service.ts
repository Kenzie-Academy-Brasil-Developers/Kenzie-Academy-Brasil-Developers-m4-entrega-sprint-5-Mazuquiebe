import AppDataSource from "../../data-source";
import { CategoriesEntity } from "../../entities/categories.entity";
import { AppError } from "../../error/appError";


const listCategoriesService = async ( id:string ):Promise<CategoriesEntity | CategoriesEntity[]> => {
  
  const categoryRepo = AppDataSource.getRepository(CategoriesEntity);

  if( id ){

    const category = await categoryRepo.findOneBy({ id });

    if( !category ){ throw new AppError(404, 'Category not found!')};

    return category;
    
  };
  
  const categories = await categoryRepo.find();
  
  return categories;
  
};
export { listCategoriesService };