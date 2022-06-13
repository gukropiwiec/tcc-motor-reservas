import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PromocoesPageRoutingModule } from './promocoes-routing.module';

import { PromocoesPage } from './promocoes.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PromocoesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PromocoesPage]
})
export class PromocoesPageModule {}
