import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavHeaderNewComponent } from './nav-header-new.component';

describe('NavHeaderNewComponent', () => {
  let component: NavHeaderNewComponent;
  let fixture: ComponentFixture<NavHeaderNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavHeaderNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavHeaderNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
