import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    NavbarComponent,
    CardComponent,
    FooterComponent,
    LoadingComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    CardComponent,
    FooterComponent,
    LoadingComponent
  ],
})
export class SharedModule { }
