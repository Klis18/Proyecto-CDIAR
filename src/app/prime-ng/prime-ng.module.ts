import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionModule } from 'primeng/accordion';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipsModule } from 'primeng/chips';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PasswordModule } from 'primeng/password';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { RatingModule } from 'primeng/rating';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { TagModule } from 'primeng/tag';
import { InputOtpModule } from 'primeng/inputotp';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    AccordionModule,
    BreadcrumbModule,
    ButtonModule,
    CardModule,
    ChipsModule,
    DialogModule,
    DynamicDialogModule,
    DividerModule,
    DropdownModule,
    FileUploadModule,
    PanelMenuModule,
    PasswordModule,
    TableModule,
    ToastModule,
    RatingModule,
    SelectButtonModule,
    SidebarModule,
    TagModule,
    InputTextModule,
    InputOtpModule
  ]
})
export class PrimeNgModule { }
