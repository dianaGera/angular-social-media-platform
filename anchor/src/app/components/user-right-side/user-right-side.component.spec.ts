import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRightSideComponent } from './user-right-side.component';

describe('UserRightSideComponent', () => {
  let component: UserRightSideComponent;
  let fixture: ComponentFixture<UserRightSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRightSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRightSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
