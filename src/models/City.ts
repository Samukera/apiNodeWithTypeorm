import { IsInt, MaxLength, MinLength } from 'class-validator';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import Client from './Client';
import State from './State';

@Entity('city')
export default class City {
  @PrimaryGeneratedColumn('increment')
  cityId: number;

  @Column({
    length: 100,
    unique: false,
  })
  @MaxLength(100)
  @MinLength(3)
  name: string;

  @ManyToOne(type => State, cities => City, { eager: true })
  @IsInt({ message: 'Please, check id of the state.' })
  state: State;

  @OneToMany(type => Client, city => City)
  clients: Client[];
}
