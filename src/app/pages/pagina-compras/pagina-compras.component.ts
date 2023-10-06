import { Component, OnInit } from '@angular/core';
import { Produto_ArquivoDTO } from 'src/app/models/dto/produto_arquivoDTO';
import { HomeServiceService } from '../home/home-service.service';
import { ArquivosService } from '../../service/arquivos.service';
import { ProdutoRest } from 'src/app/models/entity/ProdutoRest';
import { PerfilProdutoService } from '../perfil-produto/perfil-produto.service';
import { ProdutoImgs } from 'src/app/models/entity/ProdutoImgs';

@Component({
  selector: 'app-pagina-compras',
  templateUrl: './pagina-compras.component.html',
  styleUrls: ['./pagina-compras.component.scss']
})
export class PaginaComprasComponent implements OnInit{
  data_products: Produto_ArquivoDTO[] = []



  constructor(private produtosService: PerfilProdutoService, private arquivos: ArquivosService){}

  ngOnInit(): void {
    this.produtosService.getAllProdutos().subscribe((produtos: ProdutoRest[]) => {
      produtos.forEach((produto:ProdutoRest) => {
        let imagens: any[] = []
        produto.imagens_do_produto.forEach((imagens_produto:ProdutoImgs) => {
          this.arquivos.downlodImagem(imagens_produto.id).subscribe(bytes => {
            const reader = new FileReader();
            reader.onload = () => {
              imagens.push(reader.result as string)
            }
            reader.readAsDataURL(bytes)
          })
        })
        this.data_products.push({
          produto: produto,
          imagens: imagens
        });
      })
    })
  }
}
