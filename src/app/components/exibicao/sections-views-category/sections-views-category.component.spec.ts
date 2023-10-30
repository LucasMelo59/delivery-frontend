import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionsViewsCategoryComponent } from './sections-views-category.component';

describe('SectionsViewsCategoryComponent', () => {
  let component: SectionsViewsCategoryComponent;
  let fixture: ComponentFixture<SectionsViewsCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionsViewsCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionsViewsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
