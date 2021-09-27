import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Merchant } from '../model/merchant.model';
import { MerchantService } from '../service/merchant.service';

@Controller('merchant')
export class MerchantController {
  private merchantService: MerchantService;
  constructor() {
    this.merchantService = new MerchantService(Merchant);
  }
  // add
  @Post()
  create(@Body() merchant: Merchant) {
    return this.merchantService.add(merchant);
  }

  // delete
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.merchantService.remove(id);
  }
  // update
  // @Put()
  // update(@Param('id') id: string, @Body() merchant: Merchant) {

  // }
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

  // @Get()
  // findAll(@Query() query: ListAllEntities) {
  //   return `This action returns all cats (limit: ${query.limit} items)`;
  // }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
  //   return `This action updates a #${id} cat`;
  // }
}
