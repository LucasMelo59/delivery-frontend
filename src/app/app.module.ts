import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersModule } from './components/headers/headers.module';
import { CommonModule } from '@angular/common';
import { CardModule } from './components/cards/cards.module';
import { TemplatesModule } from './templates/templates.module';
import { RouterModule } from '@angular/router';
import { PerfilProdutoComponent } from './pages/perfil-produto/perfil-produto.component';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { SectionsViewsCardsProdutosComponent } from './components/exibicao/sections-views-cards-produtos/sections-views-cards-produtos.component';
import { register } from 'swiper/element/bundle';
import { HomeComponent } from './pages/home/home.component';
import { PaginaComprasComponent } from './pages/pagina-compras/pagina-compras.component';
import { CarrinhoUsuarioComponent } from './pages/carrinho-usuario/carrinho-usuario.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from 'ngx-spinner';

register();

@NgModule({
  declarations: [
    AppComponent,
    PerfilProdutoComponent,
    HomeComponent,
    PaginaComprasComponent,
    CarrinhoUsuarioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    TemplatesModule,
    ComponentsModule,
    HeadersModule,
    CardModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
