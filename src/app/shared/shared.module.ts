import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    FooterComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports:[
    FooterComponent,
    SideBarComponent
  ]
})
export class SharedModule { }
