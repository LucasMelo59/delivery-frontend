import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionsViewsCardsProdutosComponent } from './sections-views-cards-produtos.component';

describe('SectionsViewsCardsProdutosComponent', () => {
  let component: SectionsViewsCardsProdutosComponent;
  let fixture: ComponentFixture<SectionsViewsCardsProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionsViewsCardsProdutosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionsViewsCardsProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
