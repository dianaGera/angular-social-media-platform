import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumMainComponent } from './medium-main.component';

describe('MediumMainComponent', () => {
  let component: MediumMainComponent;
  let fixture: ComponentFixture<MediumMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediumMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
