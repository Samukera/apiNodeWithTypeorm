import { EntityRepository, getRepository, Repository } from 'typeorm';
import { validate, ValidationError } from 'class-validator';
import City from '../models/City';

@EntityRepository(City)
class CityRepository extends Repository<City> {
  async createCity(data: City): Promise<City | ValidationError[]> {
    const repo = getRepository(City);

    const city = await repo.create(data);

    const errors = await validate(city);

    if (errors.length === 0) {
      const res = await repo.save(data);
      return res;
    }

    return errors;
  }

  async findCity(filter: any): Promise<City[]> {
    const repo = getRepository(City);
    const options = filter
      ? {
          where: filter,
        }
      : undefined;

    const res = await repo.find(options);

    return res;
  }
}
export default new CityRepository();
