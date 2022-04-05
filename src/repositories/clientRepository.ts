/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/class-name-casing */
import { EntityRepository, getRepository, Repository } from 'typeorm';
import { validate } from 'class-validator';
import Client from '../models/Client';

@EntityRepository(Client)
class ClientRepository extends Repository<Client> {
  async createClient(data: Client): Promise<any> {
    
    const repo = getRepository(Client);

    const client = repo.create(data);

    const errors = await validate(client);

    if (errors.length === 0) {
      const res = await repo.save(data);
      return res;
    }

    return errors;
    
  }

  async deleteClient(clientId: number): Promise<any> {
    const repo = getRepository(Client);

    const res = await repo.delete(clientId);

    return res;
  }

  async changeClientName(clientId: number, newName: string): Promise<any>{
    const repo = getRepository(Client);

    const res = await repo.update(clientId, { name: newName });

    return res;
  }

  async findClients(): Promise<any> {
    const repo = getRepository(Client);

    const res = await repo.find();

    return res;
  }

  async findClientWithClientId(clientId: number): Promise<any> {
    const repo = getRepository(Client);

    const res = await repo.find({
      where: {
        clientId,
      },
    });

    return res;
  }

  async findClientWithName(name: string): Promise<any> {
    const repo = getRepository(Client);

    const res = await repo.find({
      where: {
        name,
      },
    });

    return res;
  }

  async findClient(clientId: number, name: string): Promise<any> {
    const repo = getRepository(Client);

    const res = await repo.find({
      where: {
        clientId,
        name,
      },
    });
    
    return res;
  }
  
}
export default new ClientRepository();
