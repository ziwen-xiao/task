import { Test, TestingModule } from '@nestjs/testing';
import { MerchantService } from './merchant.service';

describe.skip('MerchantService', () => {
  let service: MerchantService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MerchantService],
    }).compile();

    service = module.get<MerchantService>(MerchantService);
  });

  it.skip('should be defined', () => {
    expect(service).toBeDefined();
  });
});
