import { ProdutoImgs } from "./ProdutoImgs";

export interface ProdutoRest {
id: number;
nome: string;
preco: number;
descricao: string;
categoria: string;
createAt: Date;
updateat: Date;
produto_imgs_id: number[];
produto_imgs: ProdutoImgs[];
}
