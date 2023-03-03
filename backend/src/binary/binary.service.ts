import { Injectable } from '@nestjs/common';
import { binaryMap } from './utils/binaryMap';
import { DecodeBinaryDto } from './dto/decode-binary.dto';

@Injectable()
export class BinaryService {
  async decodeBinaryData({ binary }: DecodeBinaryDto) {
    const binaryNumbers = binary.split('.');
    let decodedString = '';
    for (const binary of binaryNumbers) {
      if (binary in binaryMap) {
        decodedString += binaryMap[binary];
      } else {
        decodedString += '';
      }
    }
    return { decodedString };
  }
}
