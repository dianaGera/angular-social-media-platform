import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTagsComponent } from './main-tags.component';

describe('MainTagsComponent', () => {
  let component: MainTagsComponent;
  let fixture: ComponentFixture<MainTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
