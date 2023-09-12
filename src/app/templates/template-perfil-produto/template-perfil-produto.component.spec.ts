import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatePerfilProdutoComponent } from './template-perfil-produto.component';

describe('TemplatePerfilProdutoComponent', () => {
  let component: TemplatePerfilProdutoComponent;
  let fixture: ComponentFixture<TemplatePerfilProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatePerfilProdutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatePerfilProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
