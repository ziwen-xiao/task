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
    return this.merchantModel.findOne({
      where: {
        id,
      },
    });
  }

  async removeById(id: string): Promise<void> {
    const merchantToBeRemove = await this.findOne(id);
    await merchantToBeRemove.destroy();
  }

  async add(merchant: Merchant): Promise<Merchant> {
    return this.merchantModel.create(merchant);
  }

  async updateById(
    id: string,
    targetMerchant: UpdateMerchantDTO,
  ): Promise<Merchant> {
    const merchantToBeUpdated: Merchant = await this.findOne(id);
    merchantToBeUpdated.update({
      name: targetMerchant.name,
      rating: targetMerchant.rating,
      address: targetMerchant.address,
      phone: targetMerchant.phone,
    });
    return merchantToBeUpdated;
  }
}
