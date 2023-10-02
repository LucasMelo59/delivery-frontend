import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateHomeComponent } from './templates/template-home/template-home.component';
import { PerfilProdutoComponent } from './pages/perfil-produto/perfil-produto.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent
  },
 {
  path: 'produtos/:id',
  component: PerfilProdutoComponent
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
