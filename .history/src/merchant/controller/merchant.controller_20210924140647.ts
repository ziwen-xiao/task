import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UpdateMerchantDTO } from '../DTO/updateMerchantDTO';
import { Merchant } from '../model/merchant.model';
import { MerchantService } from '../service/merchant.service';

@Controller('merchant')
export class MerchantController {
  private merchantService: MerchantService;
  constructor() {
    this.merchantService = new MerchantService(Merchant);
  }

  // add
  @Post('new')
  create(@Body() merchant: Merchant) {
    return this.merchantService.add(merchant);
  }

  // delete
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.merchantService.removeById(id);
  }

  // update
  @Put(':id')
  update(@Param('id') id: string, @Body() targetMerchant: UpdateMerchantDTO) {
    return this.merchantService.updateById(id, targetMerchant);
  }

  // find all
  @Get('all')
  findAll() {
    return this.merchantService.findAll();
  }

  // find one
  @Get('all/:id')
  findOne(@Param('id') id: string) {
    return this.merchantService.findOne(id);
  }

  @Get('test')
  test(): string {
    return 'Succeed!!!';
  }
}
