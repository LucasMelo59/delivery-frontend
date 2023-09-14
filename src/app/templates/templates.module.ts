import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { TemplateHomeComponent } from './template-home/template-home.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    TemplateHomeComponent,

  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports: [
    TemplateHomeComponent,
  ]

})
export class TemplatesModule { }
