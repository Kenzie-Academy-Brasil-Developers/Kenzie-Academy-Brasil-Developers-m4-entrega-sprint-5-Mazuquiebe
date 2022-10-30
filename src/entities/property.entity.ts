import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToOne, JoinTable, OneToMany, JoinColumn } from "typeorm";
import { AdressesEntity } from '../entities/adresses.entity';
import { CategoriesEntity } from './categories.entity';
import { ScheduleUsersProperties } from "./schedules.entity";

@Entity('Properties')
export class PropertyEntity{

  @PrimaryGeneratedColumn('uuid')
  readonly id:string

  @Column({default:false})
  sold:boolean

  @Column({type:"decimal", precision:12 , scale:2 })
  value:number

  @Column({type:"integer"})
  size:number

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(()=>AdressesEntity,{ eager:true })
  @JoinColumn()
  address:AdressesEntity

  @ManyToOne(()=>CategoriesEntity)
  category: CategoriesEntity

  @OneToMany(()=>ScheduleUsersProperties,schedule=>schedule.property,{ eager:true })
  @JoinColumn()
  schedules: ScheduleUsersProperties[]

};