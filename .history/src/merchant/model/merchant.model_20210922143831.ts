import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table
export class Merchant extends Model {
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
