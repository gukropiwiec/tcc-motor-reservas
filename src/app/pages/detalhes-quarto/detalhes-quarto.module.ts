import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhesQuartoPageRoutingModule } from './detalhes-quarto-routing.module';

import { DetalhesQuartoPage } from './detalhes-quarto.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhesQuartoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DetalhesQuartoPage]
})
export class DetalhesQuartoPageModule {}
