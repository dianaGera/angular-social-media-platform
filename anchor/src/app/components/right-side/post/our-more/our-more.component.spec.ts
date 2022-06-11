import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurMoreComponent } from './our-more.component';

describe('OurMoreComponent', () => {
  let component: OurMoreComponent;
  let fixture: ComponentFixture<OurMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurMoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
