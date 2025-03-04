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
  @ApiOperation({ summary: 'Crea un nuevo item' })
  @ApiResponse({ status: 201, description: 'Item agregado al carrito' })
  @ApiResponse({ status: 400, description: 'Error al agregar el item' })
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
  @ApiOperation({ summary: 'Encuentra todos los items del carrito' })
  @ApiResponse({ status: 200, description: 'Items del carrito encontrados' })
  @ApiResponse({
    status: 400,
    description: 'Error al encontrar los items del carrito',
  })
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
  @ApiOperation({ summary: 'Encuentra un item del carrito por id' })
  @ApiResponse({ status: 200, description: 'item del carrito encontrado' })
  @ApiResponse({
    status: 400,
    description: 'Error al encontrar el item del carrito',
  })
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
  @ApiOperation({ summary: 'Actualiza un item del carrito' })
  @ApiResponse({ status: 200, description: 'Item del carrito actualizado' })
  @ApiResponse({
    status: 400,
    description: 'Error al actualizar el item del carrito',
  })
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
  @ApiOperation({ summary: 'Elimina un item del carrito' })
  @ApiResponse({ status: 200, description: 'Item del carrito eliminado' })
  @ApiResponse({
    status: 400,
    description: 'Error al eliminar el item del carrito',
  })
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
