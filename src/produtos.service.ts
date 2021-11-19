import { Produto } from './produtos.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProdutosService {
  produtos: Produto[] = [
    new Produto('LIV00', 'Livro TDD e BDD na prática', 30.0),
    new Produto('LIV01', 'Livro iniciando com flutter', 39.85),
    new Produto('LIV02', 'Inteligência artificial como serviço', 55.75),
  ];

  obterTodos(): Produto[] {
    return this.produtos;
  }

  obterUm(id: number): Produto {
    return this.produtos[id];
  }
  criar(produto: Produto) {
    this.produtos.push(produto);
  }

  alterar(produto: Produto): Produto {
    return produto;
  }

  apagar(id: number) {
    this.produtos.pop();
  }
}
