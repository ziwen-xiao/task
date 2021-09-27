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
  constructor(private merchantService: MerchantService) {}

  // add
  @Post()
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

  // @Put(':id')
  // update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
  //   return `This action updates a #${id} cat`;
  // }
}