import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PostModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  text: string;

  @Column({ nullable: true })
  author: string;
}
