import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinhaContaPageRoutingModule } from './minha-conta-routing.module';

import { MinhaContaPage } from './minha-conta.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinhaContaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MinhaContaPage]
})
export class MinhaContaPageModule {}
