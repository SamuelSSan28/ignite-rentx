import { getRepository, Repository } from 'typeorm';
import { Specification } from '../entities/Specification';
import {
    ISpecificationRepository,
    ICreateSpecificationDTO,
} from './ISpecificationRepository';

class SpecificationRepository implements ISpecificationRepository {
    private repository: Repository<Specification>;

    constructor() {
        this.repository = getRepository(Specification);
    }

    async create({ name, description }: ICreateSpecificationDTO) {
        const specification = this.repository.create({ name, description });

        await this.repository.save(specification);

        return specification;
    }

    async list() {
        const specifications = await this.repository.find();
        console.log("AAAAAAAAAA")
        return specifications;
    }

    async findByName(name: string) {
        const specification = await this.repository.findOne({ name });

        return specification;
    }
}

export { SpecificationRepository };
