import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MerchantController } from '../controller/merchant.controller';
import { Merchant } from '../model/merchant.model';
import { MerchantService } from '../service/merchant.service';

@Module({
  imports: [SequelizeModule.forFeature([Merchant])],
  providers: [MerchantService],
  controllers: [MerchantController],
  exports: [MerchantService],
})
export class MerchantModule {
  constructor(private marchantService: MerchantService) {}
}
