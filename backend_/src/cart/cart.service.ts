import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { ProductsService } from 'src/products/products.service';

@Injectable()
export class CartService {
  private carts: CreateCartDto[] = [];

  constructor(private readonly productsService: ProductsService) {}

  create(createCartDto: CreateCartDto) {
    return this.carts.push(createCartDto);
  }

  findAll() {
    return this.carts.map((cart) => this.enrichCartWithProductDetails(cart));
  }

  findOne(id: number) {
    const item = this.carts.find((cart) => cart.id === id);
    if (!item) {
      throw new NotFoundException(
        `Item del carrito con id ${id} no encontrado`,
      );
    }
    return this.enrichCartWithProductDetails(item);
  }

  update(id: number, updateCartDto: UpdateCartDto) {
    const item = this.carts.find((cart) => cart.id === id);
    if (!item) {
      throw new NotFoundException(
        `Item del carrito con id ${id} no encontrado`,
      );
    }
    const product = this.productsService.findOne(item.productId);
    this.carts = this.carts.map((cart) => {
      if (cart.id === id) {
        return {
          ...cart,
          quantity: updateCartDto.quantity ?? cart.quantity,
          totalPrice: this.calculateTotalPrice(
            updateCartDto.quantity ?? item.quantity,
            product.price,
          ),
        };
      }
      return cart;
    });

    return this.findOne(id);
  }

  remove(id: number) {
    return (this.carts = this.carts.filter((cart) => cart.id !== id));
  }

  private enrichCartWithProductDetails(cart: CreateCartDto) {
    const product = this.productsService.findOne(cart.productId);
    return {
      ...cart,
      productId: {
        id: product.id,
        name: product.name,
        price: product.price,
      },
    };
  }

  private calculateTotalPrice(quantity: number, price: number): number {
    return quantity * price;
  }
}
