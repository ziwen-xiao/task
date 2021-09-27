import { Column, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'merchant',
})
export class Merchant extends Model<Merchant> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: string;

  @Column
  name: string;

  @Column
  rating: number;

  @Column
  address: string;

  @Column
  phone: string;

  // @Column({ defaultValue: true })
  // isActive: boolean;
}
