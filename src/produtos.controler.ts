import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { Produto } from './produtos.model';
import { response } from "express";

@Controller('produtos')
export class ProdutosController {
  produtos: Produto[] = [
    new Produto('LIV00', 'Livro TDD e BDD na prática', 30.0),
    new Produto('LIV01', 'Livro iniciando com flutter', 39.85),
    new Produto('LIV02', 'Inteligência artificial como serviço', 55.75),
  ];

  @Get()
  obterTodos(): Produto[] {
    return this.produtos;
  }

  @Get(':id')
  obterUm(@Param() params): Produto {
    return this.produtos[params.id];
  }
  @Post()
  criar(@Body() produto) {
    produto.id = this.produtos.length + 1;
    this.produtos.push(produto);
    console.log(produto);
    return `Produto ${produto.toString()} inserido com sucesso`;
  }

  @Put()
  alterarProduto(@Body() produto): string {
    console.log(produto);
    return 'Produto atualizado';
  }

  @Delete(':id')
  apagar(@Param() params): string {
    return `Apaga o produto ${params.id}`;
  }
}
