import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendationTopicComponent } from './recomendation-topic.component';

describe('RecomendationTopicComponent', () => {
  let component: RecomendationTopicComponent;
  let fixture: ComponentFixture<RecomendationTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecomendationTopicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomendationTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
