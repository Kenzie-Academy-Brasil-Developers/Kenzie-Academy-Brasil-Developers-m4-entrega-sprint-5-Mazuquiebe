import {Entity, PrimaryGeneratedColumn, Column, OneToOne} from 'typeorm';
import { PropertyEntity } from './property.entity';

@Entity('addresses')
export class AdressesEntity{

  @PrimaryGeneratedColumn('uuid')
  readonly id:string

  @Column({length: 120})
  district:string

  @Column({length: 20})
  zipCode:string

  @Column({length:10})
  number:string

  @Column({length:150})
  city:string

  @Column({length:120})
  state:string

  @OneToOne(()=>PropertyEntity)
  property: PropertyEntity
  
};