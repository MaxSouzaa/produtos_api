export class Produto {
  id: number;
  codigo: string;
  nome: string;
  preco: number;

  constructor(codigo: string, nome: string, preco: number) {
    this.codigo = codigo;
    this.nome = nome;
    this.preco = preco;
  }

  toString(): string {
    return `{id: ${this.id} , codigo: ${this.codigo},nome: ${this.nome}, preço: ${this.preco}}`;
  }
}
