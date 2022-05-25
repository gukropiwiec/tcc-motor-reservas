import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinhasReservasPageRoutingModule } from './minhas-reservas-routing.module';

import { MinhasReservasPage } from './minhas-reservas.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinhasReservasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MinhasReservasPage]
})
export class MinhasReservasPageModule {}
