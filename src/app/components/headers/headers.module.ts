import { NgModule } from '@angular/core';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NavHeaderComponent,

  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavHeaderComponent,
  ]

})
export class HeadersModule { }
