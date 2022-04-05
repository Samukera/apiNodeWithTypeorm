/* eslint-disable prettier/prettier */
/* eslint-disable no-param-reassign */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/class-name-casing */
import { format } from 'date-fns';
import clientRepository from '../repositories/clientRepository';

export default class clientService {
  static async createClient(data: any) {
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

  static async findClient(payload: any) {
    let result = null;

    if (payload.clientId == null && payload.name == null) {

      result = await clientRepository.findClients();
    } else if (payload.name == null) {

      result = await clientRepository.findClientWithClientId(payload.clientId);
    } else if (payload.clientId == null) {

      result = await clientRepository.findClientWithName(payload.name);
    } else if (payload.clientId != null && payload.name != null) {

      result = await clientRepository.findClient(payload.clientId, payload.name);
    }
    

     
     result = result.map(( client: any ) => {
       client.bornIn = format(new Date(client.bornIn), 'dd-MM-yyyy');
       return client;
      })
    
    return result;
  }
}
