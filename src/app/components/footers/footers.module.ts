import { NgModule } from "@angular/core";
import { FooterHomeComponent } from "./footer-home/footer-home.component";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [
    FooterHomeComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FooterHomeComponent
  ]
})
export class FootersModule { }
