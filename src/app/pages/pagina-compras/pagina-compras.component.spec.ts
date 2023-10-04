import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaComprasComponent } from './pagina-compras.component';

describe('PaginaComprasComponent', () => {
  let component: PaginaComprasComponent;
  let fixture: ComponentFixture<PaginaComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaComprasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
