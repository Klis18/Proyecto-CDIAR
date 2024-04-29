import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipsModule } from 'primeng/chips';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TagModule } from 'primeng/tag';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    BreadcrumbModule,
    ButtonModule,
    CardModule,
    ChipsModule,
    DividerModule,
    DropdownModule,
    PanelMenuModule,
    PasswordModule,
    TableModule,
    RatingModule,
    SelectButtonModule,
    TagModule,
    InputTextModule
  ]
})
export class PrimeNgModule { }
