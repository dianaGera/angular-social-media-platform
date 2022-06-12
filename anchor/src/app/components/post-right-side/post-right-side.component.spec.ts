import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostRightSideComponent } from './post-right-side.component';

describe('PostRightSideComponent', () => {
  let component: PostRightSideComponent;
  let fixture: ComponentFixture<PostRightSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostRightSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostRightSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
