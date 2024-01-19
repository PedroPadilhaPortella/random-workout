import { Component, OnInit } from '@angular/core';
import { Exercise } from '../../data/exercises';
import { Routine } from '../../data/routines';
import { ExercisesService } from './../../services/exercises.service';

@Component({
  selector: 'app-random-workout',
  templateUrl: './random-workout.component.html',
  styleUrls: ['./random-workout.component.scss']
})
export class RandomWorkoutComponent implements OnInit {
  routines: Routine[] = [];
  exercises: Exercise[] = [];

  selectedRoutines: Routine[] = [];
  selectedExercises: Exercise[] = [];

  step: number = 1;
  exercisesQuantity: number = 5

  errorMessage: string = ''

  constructor(private exercisesService: ExercisesService) { }

  ngOnInit(): void {
    this.exercises = this.exercisesService.getExercises()
    this.routines = this.exercisesService.getRoutines().map((routine) => {
      return { ...routine, isSelected: false } as Routine
    })
  }

  nextStep() {
    if (this.step == 1 && this.selectedRoutines.length == 0) {
      return this.showErrorMessage('Você precisa selecionar pelo menos um grupo muscular.');
    } else {
      this.showErrorMessage('');
    }

    if (this.step == 2 && this.exercisesQuantity == 0) {
      return this.showErrorMessage('A quantidade de exercícios deve ser maior que 1');
    } else {
      this.showErrorMessage('');
    }

    this.step += 1;

    if (this.step == 3) {
      this.generateWorkout();
    }
  }

  previousStep() {
    this.step -= 1;
  }

  updateSelectedMuscleGroups() {
    this.selectedRoutines = this.routines.filter(routine => routine.isSelected);
  }

  generateWorkout() {
    const exercisesFilteredByRoutines: Exercise[] = []

    this.exercises.forEach((exercise) => {
      exercise.routines.forEach((routineId) => {
        this.selectedRoutines.forEach((selectedRoutine) => {
          if (routineId == selectedRoutine.id) {
            exercisesFilteredByRoutines.push(exercise);
            return;
          }
        })
      })
    })

    const shuffledList = [...exercisesFilteredByRoutines];
    shuffledList.sort(() => Math.random() - 0.5);
    this.selectedExercises = shuffledList.slice(0, this.exercisesQuantity);
    console.log(this.selectedExercises)
  }

  showWorkoutRoutines() {
    return this.selectedRoutines.map((routine) => routine.name)
      .reduce((acc: string, routine: string, index: number, array: string[]) => {
        let str = acc
        if (array.length - index > 1)
          str += ', '
        else if (array.length - index > 0)
          str += ' e '

        str += routine
        return str;
      })
  }

  showErrorMessage(message: string) {
    this.errorMessage = message
  }
}
