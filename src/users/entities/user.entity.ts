import { Column, Entity } from 'typeorm';
import { CoreEntity } from './../../common/entities/core.entity';

type UserRole = 'client' | 'owner' | 'delivery';

@Entity()
export class User extends CoreEntity {
  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  role: UserRole;
}
