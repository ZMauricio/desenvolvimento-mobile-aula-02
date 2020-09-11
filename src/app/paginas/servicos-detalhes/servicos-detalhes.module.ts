import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicosDetalhesPageRoutingModule } from './servicos-detalhes-routing.module';

import { ServicosDetalhesPage } from './servicos-detalhes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicosDetalhesPageRoutingModule
  ],
  declarations: [ServicosDetalhesPage]
})
export class ServicosDetalhesPageModule {}
