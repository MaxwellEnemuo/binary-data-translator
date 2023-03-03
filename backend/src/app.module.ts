import { Module } from '@nestjs/common';

import { BinaryService } from './binary/binary.service';
import { BinaryController } from './binary/binary.controller';

@Module({
  imports: [],
  controllers: [BinaryController],
  providers: [BinaryService],
})
export class AppModule {}
