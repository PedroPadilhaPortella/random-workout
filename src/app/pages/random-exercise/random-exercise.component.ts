import { Component, OnInit } from '@angular/core';
import { Exercise } from '../../data/exercises';
import { Routine } from '../../data/routines';
import { ExercisesService } from './../../services/exercises.service';

@Component({
  selector: 'app-random-exercise',
  templateUrl: './random-exercise.component.html',
  styleUrls: ['./random-exercise.component.scss']
})
export class RandomExerciseComponent implements OnInit {
  routines: Routine[] = [];
  exercises: Exercise[] = [];
  selectedRoutineId: number = 1
  sortedExercise!: Exercise;

  constructor(private exercisesService: ExercisesService) { }

  ngOnInit(): void {
    this.routines = this.exercisesService.getRoutines()
    this.exercises = this.exercisesService.getExercises()
  }

  sortExercise() {
    const exercisesFilteredByRoutine: Exercise[] = []

    this.exercises.forEach((exercise) => {
      exercise.routines.forEach((routineId) => {
        if(routineId == this.selectedRoutineId) {
          exercisesFilteredByRoutine.push(exercise);
        }
      })
    })

    const randomId = Math.floor(Math.random() * exercisesFilteredByRoutine.length);
    this.sortedExercise = exercisesFilteredByRoutine[randomId];
  }
}
