import { Component, OnInit } from '@angular/core';
import { PerfilProdutoService } from './perfil-produto.service';
import { ProdutoRest } from 'src/app/models/entity/ProdutoRest';
import { ProdutoImgs } from 'src/app/models/entity/ProdutoImgs';
import { ArquivosService } from 'src/app/service/arquivos.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-perfil-produto',
  templateUrl: './perfil-produto.component.html',
  styleUrls: ['./perfil-produto.component.scss']
})
export class PerfilProdutoComponent implements OnInit {

  listImagensProduto : any[] = []
  productId: any = "";
  mainImg: any;
  constructor(private serviceProduto: PerfilProdutoService, private serviceArquivo: ArquivosService,  private route: ActivatedRoute){}
  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.serviceProduto.getProdutoById(this.productId).subscribe((res: ProdutoRest) => {
      console.log(res);

      res.imagens_do_produto.forEach((x:ProdutoImgs) => {
        this.serviceArquivo.downlodImagem(x.id).subscribe((res: any) => {
          const reader = new FileReader();
          reader.onload = () => {
            this.listImagensProduto.push(reader.result as string);
            this.mainImg = this.listImagensProduto[0];
          }
          reader.readAsDataURL(res)

        })
      });

    })


  }


  tradeImg(index: number) {
    this.mainImg = this.listImagensProduto[index]
  }




  tamanhoBlusas = [
    {
      tamanho: "XL"
    },
    {
      tamanho: "XXL"
    },
    {
      tamanho: "Small"
    }
  ]


}
