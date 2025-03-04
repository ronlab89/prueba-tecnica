import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import productsData from './data/productsList.json';

@Injectable()
export class ProductsService {
  private readonly products: CreateProductDto[];

  constructor() {
    this.products = productsData as CreateProductDto[];
  }

  create(createProductDto: CreateProductDto) {
    return this.products.push(createProductDto);
  }

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new NotFoundException(`Producto con id ${id} no encontrado`);
    }
    return product;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new NotFoundException(`Producto con id ${id} no encontrado`);
    }
    const productUpdated = this.products.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          name: updateProductDto.name ?? product.name,
          price: updateProductDto.price ?? product.price,
        };
      }
      return product;
    });
    return productUpdated;
  }

  remove(id: number) {
    const productDeleted = this.products.filter((product) => product.id !== id);
    return productDeleted;
  }
}
