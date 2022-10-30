import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn } from 'typeorm'
import { ScheduleUsersProperties } from './schedules.entity';

@Entity('users')
export class UserEntity {

  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column({ length: 120 })
  name: string;

  @Column({ length: 120, unique: true })
  email: string;

  @Column({ length: 150 })
  password: string;

  @Column()
  isActive: boolean;

  @Column()
  isAdm: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(()=>ScheduleUsersProperties, schedules=>schedules.user)
  @JoinColumn()
  properties: ScheduleUsersProperties[]
};