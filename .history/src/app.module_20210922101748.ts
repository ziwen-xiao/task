import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MerchantController } from './merchant/merchant.controller';
import { MerchantService } from './merchant/merchant.service';
import { MerchantModule } from './merchant/merchant.module';

@Module({
  imports: [MerchantModule],
  controllers: [AppController, MerchantController],
  providers: [AppService, MerchantService],
})
export class AppModule {}
