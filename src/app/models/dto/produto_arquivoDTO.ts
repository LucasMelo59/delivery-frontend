import { ProdutoRest } from '../entity/ProdutoRest';
export interface Produto_ArquivoDTO {
  produto: ProdutoRest;
  imagens: Array<any>;
  quantidade: number;
}
