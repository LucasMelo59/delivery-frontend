import { Produto } from "../Produto";
import { ProdutoRest } from "./ProdutoRest";

export interface CarrinhoProduto{
  createAt: Date;
  preco: number;
  produto: ProdutoRest;
  quantidade:  number
}
