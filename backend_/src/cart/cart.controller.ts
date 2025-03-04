import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Cart')
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  @ApiOperation({ summary: 'Crea un nuevo producto' })
  @ApiResponse({ status: 201, description: 'Producto creado' })
  @ApiResponse({ status: 400, description: 'Error al crear el producto' })
  @ApiBody({ type: CreateCartDto })
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createCartDto: CreateCartDto) {
    const item = this.cartService.create(createCartDto);
    return {
      status: HttpStatus.CREATED,
      message: 'Producto agregado al carrito',
      data: item,
    };
  }

  @Get()
  @ApiOperation({ summary: 'Encuentra todos los productos' })
  @ApiResponse({ status: 200, description: 'Productos encontrados' })
  @ApiResponse({ status: 400, description: 'Error al encontrar los productos' })
  @HttpCode(HttpStatus.OK)
  findAll() {
    const carts = this.cartService.findAll();
    return {
      status: HttpStatus.OK,
      message: 'Items del carrito encontrados',
      data: carts,
    };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Encuentra un item por id' })
  @ApiResponse({ status: 200, description: 'item encontrado' })
  @ApiResponse({ status: 400, description: 'Error al encontrar el item' })
  @ApiParam({ name: 'id', type: Number, description: 'Id del item' })
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: number) {
    const item = this.cartService.findOne(id);
    return {
      status: HttpStatus.OK,
      message: 'Item del carrito encontrado',
      data: item,
    };
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualiza un producto' })
  @ApiResponse({ status: 200, description: 'Producto actualizado' })
  @ApiResponse({ status: 400, description: 'Error al actualizar el producto' })
  @ApiParam({ name: 'id', type: Number, description: 'Id del item' })
  @ApiBody({ type: UpdateCartDto })
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: number, @Body() updateCartDto: UpdateCartDto) {
    const item = this.cartService.update(id, updateCartDto);
    return {
      status: HttpStatus.OK,
      message: 'Item del carrito actualizado',
      data: item,
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Elimina un producto' })
  @ApiResponse({ status: 200, description: 'Producto eliminado' })
  @ApiResponse({ status: 400, description: 'Error al eliminar el producto' })
  @ApiParam({ name: 'id', type: Number, description: 'Id del item' })
  @HttpCode(HttpStatus.OK)
  remove(@Param('id') id: number) {
    const item = this.cartService.remove(id);
    return {
      status: HttpStatus.OK,
      message: 'Item del carrito eliminado',
      data: item,
    };
  }
}
