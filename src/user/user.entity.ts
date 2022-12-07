import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '../common/AbstractEntity';

@Entity()
export class User extends AbstractEntity {
  // @Column({ nullable: false })
  // name: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false })
  credentials: string;
}
