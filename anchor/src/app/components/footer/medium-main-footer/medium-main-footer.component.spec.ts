import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumMainFooterComponent } from './medium-main-footer.component';

describe('MediumMainFooterComponent', () => {
  let component: MediumMainFooterComponent;
  let fixture: ComponentFixture<MediumMainFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediumMainFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumMainFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
