import {
  DeleteResult,
  EntityRepository,
  getRepository,
  Repository,
  UpdateResult,
} from 'typeorm';
import { validate, ValidationError } from 'class-validator';
import Client from '../models/Client';

@EntityRepository(Client)
class ClientRepository extends Repository<Client> {
  async createClient(data: Client): Promise<Client | ValidationError[]> {
    const repo = getRepository(Client);

    const client = repo.create(data);

    const errors = await validate(client);

    if (errors.length === 0) {
      const res = await repo.save(client);
      return res;
    }

    return errors;
  }

  async deleteClient(clientId: number): Promise<DeleteResult> {
    const repo = getRepository(Client);

    const res = await repo.delete(clientId);

    return res;
  }

  async changeClientName(
    clientId: number,
    newName: string,
  ): Promise<UpdateResult> {
    const repo = getRepository(Client);

    const res = await repo.update(clientId, { name: newName });

    return res;
  }

  async findClients(filter: any): Promise<Client[]> {
    const repo = getRepository(Client);

    const options = filter
      ? {
          where: filter,
        }
      : undefined;

    const res = await repo.find(options);

    return res;
  }
}
export default new ClientRepository();
