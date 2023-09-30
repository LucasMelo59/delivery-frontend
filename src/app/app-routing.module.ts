import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateHomeComponent } from './templates/template-home/template-home.component';
import { PerfilProdutoComponent } from './pages/perfil-produto/perfil-produto.component';

const routes: Routes = [

  {
    path: 'home',
    component: TemplateHomeComponent
  },
 {
  path: 'produtos/:id',
  component: PerfilProdutoComponent
 },
 {
  path: '**',
  redirectTo: 'home'
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
