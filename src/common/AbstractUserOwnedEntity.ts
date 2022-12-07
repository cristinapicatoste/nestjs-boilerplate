import { Column, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';
import { AbstractEntity } from './AbstractEntity';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class AbstractUserOwnedEntity extends AbstractEntity {
  @ApiModelProperty({
    description: 'Account of which this entity instance is property of.',
  })
  @ManyToOne(() => User, {
    nullable: false,
    onUpdate: 'RESTRICT',
    onDelete: 'CASCADE',
    eager: true,
  })
  user: User;
  @Column({ nullable: false })
  userId: string
}
