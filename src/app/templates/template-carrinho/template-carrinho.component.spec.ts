import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateCarrinhoComponent } from './template-carrinho.component';

describe('TemplateCarrinhoComponent', () => {
  let component: TemplateCarrinhoComponent;
  let fixture: ComponentFixture<TemplateCarrinhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateCarrinhoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateCarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
