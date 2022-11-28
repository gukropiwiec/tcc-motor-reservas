import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaQuartosPageRoutingModule } from './lista-quartos-routing.module';

import { ListaQuartosPage } from './lista-quartos.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaQuartosPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
  ],
  declarations: [ListaQuartosPage],
})
export class ListaQuartosPageModule {}
