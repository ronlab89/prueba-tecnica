import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNumber, IsString, Min, MinLength } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ description: 'Id del producto' })
  @IsNumber()
  @IsInt()
  @Min(1)
  id: number;

  @ApiProperty({ description: 'Nombre del producto' })
  @IsString()
  @MinLength(3)
  name: string;

  @ApiProperty({ description: 'Precio del producto' })
  @IsNumber()
  @Min(0)
  price: number;
}
