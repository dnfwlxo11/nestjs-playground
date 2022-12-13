import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Board {
  @PrimaryGeneratedColumn()
  contentId: number;

  @Column({ length: 30 })
  title: string;

  @Column({ length: 500 })
  content: string;

  @Column({ length: 30 })
  author: string;

  @Column()
  create_ts: string;

  @Column()
  update_ts: string;
}
