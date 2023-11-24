import { ProdutoRest } from '../entity/ProdutoRest';
export interface Produto_ArquivoDTO {
  produto: ProdutoRest;
  imagens: Array<any>;
  quantidade: number;
  carrinho_id: number;
  carrinho_produto_id: number;
  carrinho_total: number;
}
