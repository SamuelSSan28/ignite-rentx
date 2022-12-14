import { Category } from '../../entities/Category';
import {
    ICategoryRepository,
    ICreateCategoryDTO,
} from '../ICategoryRepository';

class CategoriesRepositoryInMemory implements ICategoryRepository {
    private categories: Category[];

    constructor() {
        this.categories = [];
    }

    async create({ name, description }: ICreateCategoryDTO) {
        const category = new Category();

        Object.assign(category, { name, description, created_at: new Date() });

        this.categories.push(category);
    }

    async list() {
        return this.categories;
    }

    async findByName(name: string) {
        const category = this.categories.find(
            (category) => category.name === name
        );

        return category;
    }
}

export { CategoriesRepositoryInMemory };
