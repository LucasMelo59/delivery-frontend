import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionInstaBlogComponent } from './section-insta-blog.component';

describe('SectionInstaBlogComponent', () => {
  let component: SectionInstaBlogComponent;
  let fixture: ComponentFixture<SectionInstaBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionInstaBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionInstaBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
