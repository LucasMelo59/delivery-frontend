import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateHomeComponent } from './templates/template-home/template-home.component';
import { PerfilProdutoComponent } from './pages/perfil-produto/perfil-produto.component';
import { HomeComponent } from './pages/home/home.component';
import { PaginaComprasComponent } from './pages/pagina-compras/pagina-compras.component';
import { CarrinhoUsuarioComponent } from './pages/carrinho-usuario/carrinho-usuario.component';

const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent
  },
 {
  path: 'produtos/:id',
  component: PerfilProdutoComponent
 },
 {
  path: 'shop',
  component: PaginaComprasComponent
 },
 {
  path: 'cart',
  component: CarrinhoUsuarioComponent
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
