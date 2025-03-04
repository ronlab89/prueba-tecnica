import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNumber } from 'class-validator';

export class CreateCartDto {
  @ApiProperty({ description: 'Id del Item del carrito' })
  @IsNumber()
  @IsInt()
  id: number;

  @ApiProperty({ description: 'Id del producto' })
  @IsNumber()
  @IsInt()
  productId: number;

  @ApiProperty({ description: 'Cantidad del producto' })
  @IsNumber()
  quantity: number;

  @ApiProperty({ description: 'Precio del producto' })
  @IsNumber()
  totalPrice: number;
}
