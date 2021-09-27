import { DataTypes } from 'sequelize/types';

export class UpdateMerchantDTO {
  name: string;
  rating: DataTypes.DecimalDataType;
  address: string;
  phone: string;
}
