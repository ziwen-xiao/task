import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
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

  async remove(id: string): Promise<void> {
    const merchant = await this.findOne(id);
    await merchant.destroy();
  }

  async add(merchant: Merchant): Promise<Merchant[]> {
    const merchants: Merchant[] = await this.findAll();
    merchants.push(merchant);
    return merchants;
  }
}
