import { ConflictException, HttpStatus, Injectable } from '@nestjs/common';
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

  async add(merchant: Merchant): Promise<string> {
    // console.log(merchant);
    const merchants = await this.merchantModel.findAll();
    console.log(
      merchants.map((merchant) => {
        return merchant.name;
      }),
    );
    if (merchants.includes(merchant)) {
      // console.log('should throw error');
      throw new ConflictException({
        status: HttpStatus.CONFLICT,
        error: 'This Merchant is Already Exist!!!',
      });
    }
    this.merchantModel.create(merchant);
    return `Add a New Merchant: ${merchant.name} Successfully!!!`;
  }

  async updateById(
    id: string,
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
