import { Column, Entity, Index, ManyToOne } from 'typeorm';
import { User } from '../../user/user.entity';
import { AbstractUserOwnedEntity } from '../../common/AbstractUserOwnedEntity';

@Entity()
export class RefreshToken extends AbstractUserOwnedEntity {
  @Column({
    nullable: false,
    unique: true,
  })
  token: string;

  @Column({ nullable: false })
  @Index()
  crossToken: string;

  @Column({
    nullable: false,
  })
  expiresAt: Date;

  @ManyToOne(() => User, {
    nullable: false,
    onDelete: 'CASCADE',
    eager: true,
  })
  user: User;
}
