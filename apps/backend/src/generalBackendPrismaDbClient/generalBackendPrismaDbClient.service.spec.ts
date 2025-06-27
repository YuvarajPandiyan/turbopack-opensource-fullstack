import { Test, TestingModule } from '@nestjs/testing';
import { PrismaDatabaseService } from './generalBackendPrismaDbClient.service';

describe('PrismaDatabaseService', () => {
  let service: PrismaDatabaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaDatabaseService],
    }).compile();

    service = module.get<PrismaDatabaseService>(PrismaDatabaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
