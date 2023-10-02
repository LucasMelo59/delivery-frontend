import { NgModule } from '@angular/core';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavHeaderComponent,

  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavHeaderComponent,
  ]

})
export class HeadersModule { }
