import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MerchantController } from './merchant/controller/merchant.controller';
import { Merchant } from './merchant/model/merchant.model';
import { MerchantModule } from './merchant/module/merchant.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'task',
      models: [Merchant],
    }),
    MerchantModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
