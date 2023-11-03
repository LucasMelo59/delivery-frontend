import { NgModule } from '@angular/core';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavHeaderNewComponent } from './nav-header-new/nav-header-new.component';

@NgModule({
  declarations: [
    NavHeaderComponent,
    NavHeaderNewComponent,

  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavHeaderComponent,
    NavHeaderNewComponent
  ]

})
export class HeadersModule { }
