/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/class-name-casing */
import { EntityRepository, getRepository, Repository } from 'typeorm';
import { validate } from 'class-validator';
import City from '../models/City';

@EntityRepository(City)
class CityRepository extends Repository<City> {
  async createCity(data: City): Promise<any> {
    const repo = getRepository(City);

    const city = await repo.create(data);

    const errors = await validate(city);

    if (errors.length === 0) {
      const res = await repo.save(data);
      return res;
    }

    return errors;
  }

  async findCity(name: string, state: number): Promise<any> {
    const repo = getRepository(City);

    const res = await repo.find({
      where: {
        name,
        state,
      },
    });

    return res;
  }

  async findCityWithStateId(state: number): Promise<any> {
    const repo = getRepository(City);

    const res = await repo.find({
      where: {
        state,
      },
    });
    return res;
  }

  async findCityWithName(name: string): Promise<any> {
    const repo = getRepository(City);

    const res = await repo.find({
      where: {
        name,
      },
    });

    return res;
  }

  async findCities(): Promise<any> {
    const repo = getRepository(City);

    const res = await repo.find();

    return res;
  }
}
export default new CityRepository();
