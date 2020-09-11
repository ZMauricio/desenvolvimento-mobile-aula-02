import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaServicosPage } from './lista-servicos.page';

describe('ListaServicosPage', () => {
  let component: ListaServicosPage;
  let fixture: ComponentFixture<ListaServicosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaServicosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaServicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
