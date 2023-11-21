import { Component, OnInit } from '@angular/core';
import { PerfilProdutoService } from '../perfil-produto/perfil-produto.service';
import { Produto } from 'src/app/models/Produto';
import { ProdutoRest } from 'src/app/models/entity/ProdutoRest';
import { Produto_ArquivoDTO } from 'src/app/models/dto/produto_arquivoDTO';
import { ProdutoImgs } from 'src/app/models/entity/ProdutoImgs';
import { ArquivosService } from 'src/app/service/arquivos.service';
import { delay, tap } from 'rxjs';
import { HomeServiceService } from './home-service.service';
import { CarrinhoDeCompras } from 'src/app/models/entity/CarrinhoDeCompras';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data_produto_dto: Produto_ArquivoDTO[] = [];
  data_produto_dto_carousel: Produto_ArquivoDTO[] = []
  loading: boolean = true;
  carrinho_de_compras!: CarrinhoDeCompras;
  testando: any[] = [];
  constructor(private service: PerfilProdutoService, private service_imgs: ArquivosService, private home: HomeServiceService){}

  ngOnInit(): void {
    // this.loading = true;
    const model = {
      categoria: 'swiper'
    }
    this.service.getProdutosWithFilter(model)
    .pipe(
      tap(() => {
        this.loading = false;
      })
    )
    .subscribe((produtos: ProdutoRest[]) => {

      produtos.forEach((produto:ProdutoRest) => {
        let imagens: any[] = []
        produto.produto_imgs_id.forEach((imagens_produto:number) => {
          this.service_imgs.downlodImagem(imagens_produto).subscribe(bytes => {
            const reader = new FileReader();
            reader.onload = () => {
              imagens.push(reader.result as string)
            }
            reader.readAsDataURL(bytes)
          })
        })
        this.data_produto_dto.push({
          produto: produto,
          imagens: imagens,
          quantidade: 0
        });
      })
      console.log(this.data_produto_dto);

      this.data_produto_dto_carousel = this.data_produto_dto;
    })

    this.home.getCarrinhoComProdutos(1).subscribe((x: CarrinhoDeCompras) => {
      console.log(x);
      this.carrinho_de_compras = x;

      x.carrinho_produto.forEach(y => {
        console.log(y);
        let imgs: any[] = []
        if (y.produto.produto_imgs.length > 1) {

          this.service_imgs.downlodImagem(y.produto.produto_imgs[0].id).subscribe(imagem => {
            const reader = new FileReader();
            reader.onload = () => {
              imgs.push(reader.result as string)
            }
            reader.readAsDataURL(imagem)
          })
          this.testando.push(
            {
              produto:y.produto,
              imagens: imgs,
              quantidade: y.quantidade
            }
          )

        }

      })
    })
  }


   submitFilter(data:any) {
    this.loading = true
    console.log(data);
    const filter = {
      categoria: data
    }
    this.service.getProdutosWithFilter(filter)
    .pipe(
      tap(() => {
        this.loading = false;
        this.data_produto_dto = []
      })
    )
    .subscribe((produtos: ProdutoRest[]) => {
      console.log(produtos);

      produtos.forEach((produto:ProdutoRest) => {
        let imagem: any[] = [];
        produto.produto_imgs_id.forEach((imagens_produto: number) => {

          this.service_imgs.downlodImagem(imagens_produto).subscribe((bytes: any) => {
            const reader = new FileReader();
            reader.onload = () => {
              imagem.push(reader.result as string)
            }
            reader.readAsDataURL(bytes)
          })

        })
        this.data_produto_dto.push({
          imagens: imagem,
          produto: produto,
          quantidade: 0
        })
      })

    })
  }

  submitCategoria(model: any) {

  }



}
