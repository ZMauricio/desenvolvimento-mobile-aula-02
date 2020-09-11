import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-servicos',
  templateUrl: './lista-servicos.page.html',
  styleUrls: ['./lista-servicos.page.scss'],
})
export class ListaServicosPage implements OnInit {
  public tiposServicos = [
    { id: 1, nome: 'Alinhamento', valor: 12.34 },

    { id: 2, nome: 'Balanceamento', valor: 56.78 },

    { id: 3, nome: 'Revisão freios', valor: 90.12 },
    
    { id: 4, nome: 'Suspensão', valor: 34.56 }
  ];

  constructor() { }

  ngOnInit() {
  }

}
