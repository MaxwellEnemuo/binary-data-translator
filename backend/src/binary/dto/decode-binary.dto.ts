import { IsNotEmpty, IsString, Matches } from '@nestjs/class-validator';

export class DecodeBinaryDto {
  @IsString()
  @IsNotEmpty({ message: 'Binary input is required' })
  @Matches(/^([01]+\.)+[01]+$/, {
    message: 'Invalid binary input',
  })
  binary: string;
}
