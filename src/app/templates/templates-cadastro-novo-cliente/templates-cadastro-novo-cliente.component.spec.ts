import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesCadastroNovoClienteComponent } from './templates-cadastro-novo-cliente.component';

describe('TemplatesCadastroNovoClienteComponent', () => {
  let component: TemplatesCadastroNovoClienteComponent;
  let fixture: ComponentFixture<TemplatesCadastroNovoClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatesCadastroNovoClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatesCadastroNovoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
