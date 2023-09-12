import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFinalizarCompraComponent } from './template-finalizar-compra.component';

describe('TemplateFinalizarCompraComponent', () => {
  let component: TemplateFinalizarCompraComponent;
  let fixture: ComponentFixture<TemplateFinalizarCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateFinalizarCompraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateFinalizarCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
