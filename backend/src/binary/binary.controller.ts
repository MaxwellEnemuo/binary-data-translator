import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BinaryService } from './binary.service';
import { DecodeBinaryDto } from './dto/decode-binary.dto';

@Controller('/api')
export class BinaryController {
  constructor(private readonly binaryService: BinaryService) {}

  @Post('/decode')
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.OK)
  getDecodeBinary(@Body() decodeBinaryDto: DecodeBinaryDto) {
    return this.binaryService.decodeBinaryData(decodeBinaryDto);
  }
}
