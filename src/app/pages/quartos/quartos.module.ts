import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuartosPageRoutingModule } from './quartos-routing.module';

import { QuartosPage } from './quartos.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuartosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [QuartosPage]
})
export class QuartosPageModule {}
