import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionsCardsGuideComponent } from './sections-cards-guide.component';

describe('SectionsCardsGuideComponent', () => {
  let component: SectionsCardsGuideComponent;
  let fixture: ComponentFixture<SectionsCardsGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionsCardsGuideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionsCardsGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
