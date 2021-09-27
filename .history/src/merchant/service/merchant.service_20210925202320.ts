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

  findOne(id: number): Promise<Merchant> {
    return this.merchantModel.findOne({ where: { id } });
  }

  async removeById(id: number): Promise<string> {
    const merchantToBeRemove = await this.findOne(id);
    await merchantToBeRemove.destroy();
    return `Delete No.${id} Merchant Successfully!!!`;
  }

  async add(merchant: Merchant): Promise<string> {
    // const merchantModels = await this.merchantModel.findAll();
    // const merchants = merchantModels.map((merchant) => {
    //   return merchant.name;
    // });
    // if (merchants.includes(merchant.name)) {
    //   throw new ConflictException({
    //     status: HttpStatus.CONFLICT,
    //     error: `This Merchant: ${merchant.name} is Already Exist!!!`,
    //   });
    // }
    function successCallback(): string {
      return `Add a New Merchant: ${merchant.name} Successfully!!!`;
      // console.log('音频文件创建成功: ' + result);
    }

    function failureCallback(): string {
      return `This Merchant: ${merchant.name} is Already Exsit!!!`;
      // console.log('音频文件创建失败: ' + error);
    }

    return this.merchantModel.create(merchant).then(
      () => {
        return `Add a New Merchant: ${merchant.name} Successfully!!!`;
      },
      () => {
        return `This Merchant: ${merchant.name} is Already Exsit!!!`;
      },
    );
    // this.merchantModel.create(merchant).then(
    //   () => {
    //     console.log(`Add a New Merchant: ${merchant.name} Successfully!!!`);
    //   },
    //   () => {
    //     console.log;
    //   },
    // );
    // .catch(() => console.log);
    // return `Add a New Merchant: ${merchant.name} Successfully!!!`;
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
