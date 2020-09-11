import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaServicosPageRoutingModule } from './lista-servicos-routing.module';

import { ListaServicosPage } from './lista-servicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaServicosPageRoutingModule
  ],
  declarations: [ListaServicosPage]
})
export class ListaServicosPageModule {}
