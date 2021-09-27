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

  @Column
  rating: DataTypes.DecimalDataType;

  @Column
  address: string;

  @Column
  phone: string;
}
