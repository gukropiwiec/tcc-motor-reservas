import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaQuartosPage } from './lista-quartos.page';

const routes: Routes = [
  {
    path: '',
    component: ListaQuartosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaQuartosPageRoutingModule {}
