/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/class-name-casing */
import cityRepository from '../repositories/cityRepository';

export default class cityService {
  static async createCity(data: any) {
    const result = await cityRepository.createCity(data);
    return result;
  }

  static async findCity(payload: any) {
    let result = null;

    if (payload.name == null && payload.state == null) {

      result = await cityRepository.findCities();
    } else if (payload.name == null) {

      result = await cityRepository.findCityWithStateId(payload.state);
    } else if (payload.state == null) {

      result = await cityRepository.findCityWithName(payload.name);
    } else if (payload.name != null && payload.state != null) {

      result = await cityRepository.findCity(payload.name, payload.state);
    }

    return result;
  }
}
