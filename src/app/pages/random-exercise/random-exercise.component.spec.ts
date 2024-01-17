import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomExerciseComponent } from './random-exercise.component';

describe('RandomExerciseComponent', () => {
  let component: RandomExerciseComponent;
  let fixture: ComponentFixture<RandomExerciseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RandomExerciseComponent]
    });
    fixture = TestBed.createComponent(RandomExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
