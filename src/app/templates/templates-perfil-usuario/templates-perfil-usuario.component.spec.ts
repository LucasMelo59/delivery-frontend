import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesPerfilUsuarioComponent } from './templates-perfil-usuario.component';

describe('TemplatesPerfilUsuarioComponent', () => {
  let component: TemplatesPerfilUsuarioComponent;
  let fixture: ComponentFixture<TemplatesPerfilUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatesPerfilUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatesPerfilUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
