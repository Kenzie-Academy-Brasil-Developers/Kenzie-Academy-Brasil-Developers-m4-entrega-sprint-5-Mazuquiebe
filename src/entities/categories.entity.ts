import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import { PropertyEntity } from './property.entity';

@Entity('categories')
export class CategoriesEntity{

  @PrimaryGeneratedColumn('uuid')
  readonly id:string

  @Column({length: 120, unique: true })
  name:string

  @OneToMany(()=>PropertyEntity, (property)=>property.category,{ eager: true })
  properties: PropertyEntity[]
}