import { ProdutoImgs } from "./ProdutoImgs";

export interface ProdutoRest {
id: number;
nome: string;
preco: number;
descricao: string;
categoria: string;
createAt: Date;
updateat: Date;
imagens_do_produto: ProdutoImgs[];
}
