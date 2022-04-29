import City from '../models/City';
import cityRepository from '../repositories/cityRepository';
import { createFilterCity } from '../utils/functions/functions';

export default class cityService {
  static async createCity(data: City) {
    const result = await cityRepository.createCity(data);
    return result;
  }

  static async findCity(name: string, state: number) {
    const filters = createFilterCity(name, state);

    return cityRepository.findCity(filters);
  }
}
