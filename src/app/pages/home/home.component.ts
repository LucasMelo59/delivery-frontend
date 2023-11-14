import { Component, OnInit } from '@angular/core';
import { PerfilProdutoService } from '../perfil-produto/perfil-produto.service';
import { Produto } from 'src/app/models/Produto';
import { ProdutoRest } from 'src/app/models/entity/ProdutoRest';
import { Produto_ArquivoDTO } from 'src/app/models/dto/produto_arquivoDTO';
import { ProdutoImgs } from 'src/app/models/entity/ProdutoImgs';
import { ArquivosService } from 'src/app/service/arquivos.service';
import { delay, tap } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data_produto_dto: Produto_ArquivoDTO[] = [];
  loading: boolean = false;
  constructor(private service: PerfilProdutoService, private service_imgs: ArquivosService){}

  ngOnInit(): void {
    this.loading = true;
    const model = {
      categoria: "swiper"
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
          imagens: imagens
        });
      })
      console.log(this.data_produto_dto);

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
        let imagen: any[] = [];
        produto.produto_imgs_id.forEach((imagens_produto: number) => {

          this.service_imgs.downlodImagem(imagens_produto).subscribe((bytes: any) => {
            const reader = new FileReader();
            reader.onload = () => {
              imagen.push(reader.result as string)
            }
            reader.readAsDataURL(bytes)
          })

        })
        this.data_produto_dto.push({
          imagens: imagen,
          produto: produto
        })
      })


    })
  }

  submitCategoria(model: any) {

  }



}
