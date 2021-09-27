import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
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
  update(@Query() id: string, @Req() targetMerchant: UpdateMerchantDTO) {
    return this.merchantService.updateById(id, targetMerchant);
  }

  // find one
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.merchantService.findOne(id);
  }

  // find all
  @Get()
  findAll() {
    return this.merchantService.findAll();
  }
}
