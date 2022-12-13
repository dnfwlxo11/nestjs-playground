import { Test, TestingModule } from '@nestjs/testing';
import { databaseProvider } from './database.provider';

describe('Database', () => {
  let provider: databaseProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [databaseProvider],
    }).compile();

    provider = module.get<databaseProvider>(databaseProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
