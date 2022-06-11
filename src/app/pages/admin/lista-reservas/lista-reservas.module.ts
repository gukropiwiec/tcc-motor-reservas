import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaReservasPageRoutingModule } from './lista-reservas-routing.module';

import { ListaReservasPage } from './lista-reservas.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaReservasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListaReservasPage]
})
export class ListaReservasPageModule {}
