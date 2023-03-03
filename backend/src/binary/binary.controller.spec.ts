import { Test, TestingModule } from '@nestjs/testing';
import { BinaryController } from './binary.controller';
import { BinaryService } from './binary.service';
import { DecodeBinaryDto } from './dto/decode-binary.dto';

describe('BinaryController', () => {
  let binaryController: BinaryController;
  let binaryService: BinaryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BinaryController],
      providers: [BinaryService],
    }).compile();

    binaryController = module.get<BinaryController>(BinaryController);
    binaryService = module.get<BinaryService>(BinaryService);
  });

  describe('getDecodeBinary', () => {
    it('should return decoded binary data', async () => {
      const decodeBinaryDTO: DecodeBinaryDto = { binary: '10000.00101.01110' };
      const decodedData = { decodedString: 'pen' };
      const result = binaryController.getDecodeBinary(decodeBinaryDTO);

      jest
        .spyOn(binaryService, 'decodeBinaryData')
        .mockReturnValue(decodedData);
      expect(result).toEqual(decodedData);
    });
  });
});
