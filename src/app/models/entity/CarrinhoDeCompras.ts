import { CarrinhoProduto } from "./CarrinhoComProdutos";

export interface CarrinhoDeCompras {
  id: number;
  cartTotal: number;
  carrinho_produto: CarrinhoProduto[];
  qtdProdutos: number;
  updateAt: Date;
  createAt: Date;
}
