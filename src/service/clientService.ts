import Client from '../models/Client';
import clientRepository from '../repositories/clientRepository';
import { createFilterClient } from '../utils/functions/functions';

export default class clientService {
  static async createClient(data: Client) {
    const result = await clientRepository.createClient(data);
    return result;
  }

  static async deleteClient(clientId: number) {
    const result = await clientRepository.deleteClient(clientId);
    return result;
  }

  static async changeClientName(clientId: number, name: string) {
    const result = await clientRepository.changeClientName(clientId, name);
    return result;
  }

  static async findClient(clientId: number, name: string) {
    const filters = createFilterClient(clientId, name);

    const result = clientRepository.findClients(filters);

    return result;
  }
}
