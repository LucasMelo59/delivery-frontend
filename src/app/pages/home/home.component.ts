import { Component, OnInit } from '@angular/core';
import { PerfilProdutoService } from '../perfil-produto/perfil-produto.service';
import { Produto } from 'src/app/models/Produto';
import { ProdutoRest } from 'src/app/models/entity/ProdutoRest';
import { Produto_ArquivoDTO } from 'src/app/models/dto/produto_arquivoDTO';
import { ProdutoImgs } from 'src/app/models/entity/ProdutoImgs';
import { ArquivosService } from 'src/app/service/arquivos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data_produtos: ProdutoRest[] = [];
  data_produto_dto: Produto_ArquivoDTO[] = [];
  constructor(private service: PerfilProdutoService, private service_imgs: ArquivosService){}

  ngOnInit(): void {
    this.service.getProdutoById(1).subscribe((res: any) => {

      this.data_produtos.push(res);
      console.log(this.data_produtos);
    })
  }

  submitId(data:any) {
    this.data_produto_dto = []
    this.service.getProdutoById(data).subscribe((res: ProdutoRest) => {
      let imagens: any[] = [];
      res.imagens_do_produto.forEach((x: ProdutoImgs) => {

        this.service_imgs.downlodImagem(x.id).subscribe((y:any) => {
          const reader = new FileReader();
          reader.onload = () => {
            imagens.push(reader.result as string)
          }
          reader.readAsDataURL(y)

        })

      })
      this.data_produto_dto.push({
        imagens: imagens,
        produto: res
      })

    })
  }



}
