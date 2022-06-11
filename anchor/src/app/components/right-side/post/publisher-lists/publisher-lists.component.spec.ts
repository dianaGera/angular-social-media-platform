import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherListsComponent } from './publisher-lists.component';

describe('PublisherListsComponent', () => {
  let component: PublisherListsComponent;
  let fixture: ComponentFixture<PublisherListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublisherListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisherListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
