import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    PerfilProdutoComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    TemplatesModule,
    ComponentsModule,
    HeadersModule,
    CardModule,
    CommonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
