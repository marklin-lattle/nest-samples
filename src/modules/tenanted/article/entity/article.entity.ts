import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Article {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'title',
    nullable: false,
    default: '',
  })
  title: string;

  @Column({
    name: 'content',
    nullable: true,
  })
  content: string;

  @CreateDateColumn({
    type: 'timestamp without time zone',
    name: 'createdAt',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp without time zone',
    name: 'updatedAt',
  })
  updatedAt: Date;
}
