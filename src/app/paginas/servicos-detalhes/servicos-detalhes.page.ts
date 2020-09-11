import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servicos-detalhes',
  templateUrl: './servicos-detalhes.page.html',
  styleUrls: ['./servicos-detalhes.page.scss'],
})
export class ServicosDetalhesPage implements OnInit {
  id: number = null;

  constructor(private route: ActivatedRoute) {
    this.id = Number(  this.route.snapshot.paramMap.get('id')  );
  }

  ngOnInit() {
  }

}
