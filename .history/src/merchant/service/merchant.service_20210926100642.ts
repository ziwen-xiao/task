import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { error } from 'console';
import { UpdateMerchantDTO } from '../DTO/updateMerchantDTO';
import { Merchant } from '../model/merchant.model';

@Injectable()
export class MerchantService {
  constructor(
    @InjectModel(Merchant)
    private merchantModel: typeof Merchant,
  ) {}

  async findAll(): Promise<Merchant[]> {
    return this.merchantModel.findAll();
  }

  findOne(id: number): Promise<Merchant> {
    return this.merchantModel.findOne({ where: { id } });
  }

  async removeById(id: number): Promise<string> {
    const merchantToBeRemove = await this.findOne(id);
    await merchantToBeRemove.destroy();
    return `Delete No.${id} Merchant Successfully!!!`;
  }

  async add(merchant: Merchant): Promise<string> {
    return this.merchantModel
      .create(merchant)
      .then(() => `Add a New Merchant: ${merchant.name} Successfully!!!`)
      .catch((error) => error.message);
  }

  async updateById(
    id: number,
    targetMerchant: UpdateMerchantDTO,
  ): Promise<string> {
    this.merchantModel.update(
      {
        name: targetMerchant.name,
        address: targetMerchant.address,
        phone: targetMerchant.phone,
      },
      { where: { id } },
    );
    return `Update No.${id} Merchant Successfully!`;
  }
}
