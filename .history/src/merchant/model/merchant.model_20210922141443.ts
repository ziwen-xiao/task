import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Merchant extends Model<Merchant> {
  @PrimaryKey
  @Column
  id: string;

  @Column
  name: string;

  @Column
  rating: number;

  @Column
  address: string;

  @Column
  phone: string;

  @Column({ defaultValue: true })
  isActive: boolean;
}
