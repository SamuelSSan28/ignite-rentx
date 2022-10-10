import { CategoryRepository } from '../repositories/CategoryRepository';
import { ICategoryepository } from '../repositories/ICategoryRepository';

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {
    constructor(private categoryRepository: ICategoryepository) {}

    execute({ name, description }: IRequest) {
        const categoryAlredyExists = this.categoryRepository.findByName(name);

        if (categoryAlredyExists) {
            throw new Error('Category Alredy Exists!');
        }

        this.categoryRepository.create({ name, description });
    }
}

export {CreateCategoryService}
