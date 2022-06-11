import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhesQuartoPage } from './detalhes-quarto.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhesQuartoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhesQuartoPageRoutingModule {}
