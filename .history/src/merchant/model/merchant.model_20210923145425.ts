import { Column, Model, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize/types';

@Table({
  tableName: 'merchant',
  timestamps: false,
})
export class Merchant extends Model<Merchant> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: string;

  @Column
  name: string;

  @Column({
    type: DataTypes.DECIMAL,
  })
  rating: number;

  @Column
  address: string;

  @Column
  phone: string;
}
