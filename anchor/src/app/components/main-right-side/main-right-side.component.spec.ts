import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRightSideComponent } from './main-right-side.component';

describe('MainRightSideComponent', () => {
  let component: MainRightSideComponent;
  let fixture: ComponentFixture<MainRightSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainRightSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainRightSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
