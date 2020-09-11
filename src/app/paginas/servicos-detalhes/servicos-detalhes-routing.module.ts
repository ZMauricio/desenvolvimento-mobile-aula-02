import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicosDetalhesPage } from './servicos-detalhes.page';

const routes: Routes = [
  {
    path: '',
    component: ServicosDetalhesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicosDetalhesPageRoutingModule {}
