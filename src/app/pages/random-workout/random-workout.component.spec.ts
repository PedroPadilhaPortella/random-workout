import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomWorkoutComponent } from './random-workout.component';

describe('RandomWorkoutComponent', () => {
  let component: RandomWorkoutComponent;
  let fixture: ComponentFixture<RandomWorkoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RandomWorkoutComponent]
    });
    fixture = TestBed.createComponent(RandomWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
