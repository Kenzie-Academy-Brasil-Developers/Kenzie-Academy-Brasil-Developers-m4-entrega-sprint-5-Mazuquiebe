import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { CategoriesEntity } from './categories.entity';
import { PropertyEntity } from './property.entity';

@Entity('schedule_users_properties')
export class ScheduleUsersProperties {
  @PrimaryGeneratedColumn('uuid')
  readonly id:string
  
  @Column({length: 50})
  date: string

  @Column({length: 50})
  hour: string

  @ManyToOne(()=>PropertyEntity)
  property: PropertyEntity

  @ManyToOne(()=>UserEntity,{eager:true})
  @JoinColumn()
  user: UserEntity

}; 