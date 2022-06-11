import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTopPostsComponent } from './our-top-posts.component';

describe('OurTopPostsComponent', () => {
  let component: OurTopPostsComponent;
  let fixture: ComponentFixture<OurTopPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurTopPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurTopPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
