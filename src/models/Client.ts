/* eslint-disable prettier/prettier */
import {IsInt, IsString, MaxLength, MinLength} from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import City from './City';

@Entity('client')
export default class Client {
  @PrimaryGeneratedColumn('increment')
  clientId: number;

  @Column({
    length: 100,
    unique: false,
  })
  @MaxLength(100)
  @MinLength(3)
  name: string;

  @Column({
    length: 1,
    unique: false,
  })
  @MaxLength(1)
  @MinLength(1)
  genre: string;

  @Column()
  @IsString()
  bornIn: Date;

  @Column()
  @IsInt()
  age: number;

  @ManyToOne(type => City, clients => Client, { eager: true })
  @IsInt({message: "Please, check id of the city."})
  city: City;
}