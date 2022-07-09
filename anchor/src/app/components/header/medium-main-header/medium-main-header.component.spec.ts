import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumMainHeaderComponent } from './medium-main-header.component';

describe('MediumMainHeaderComponent', () => {
  let component: MediumMainHeaderComponent;
  let fixture: ComponentFixture<MediumMainHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediumMainHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumMainHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
