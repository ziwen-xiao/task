import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
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

  findOne(id: string): Promise<Merchant> {
    return this.merchantModel.findOne({ where: { id } });
  }

  async removeById(id: string): Promise<string> {
    const merchantToBeRemove = await this.findOne(id);
    await merchantToBeRemove.destroy();
    return `Delete No.${id} Merchant Successfully!!!`;
  }

  async add(merchant: Merchant): Promise<Merchant> {
    return this.merchantModel.create(merchant);
  }

  async updateById(
    id: string,
    targetMerchant: UpdateMerchantDTO,
  ): Promise<string> {
    this.merchantModel.update(
      {
        name: targetMerchant.name,
        rating: targetMerchant.rating,
        address: targetMerchant.address,
        phone: targetMerchant.phone,
      },
      { where: { id } },
    );
    return `Update No.${id} Merchant Successfully!`;
  }
}
