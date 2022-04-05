import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import City from './City';

@Entity('state')
export default class State {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    length: 100,
    unique: false,
  })
  name: string;

  @Column({
    length: 2,
    unique: false,
  })
  uf: string;

  @OneToMany(type => City, state => State)
  cities: City[];
}
