import { Component, OnInit } from '@angular/core';
import { Exercise } from '../../data/exercises';
import { MuscularGroup } from '../../data/muscular-groups';
import { ExercisesService } from './../../services/exercises.service';

@Component({
  selector: 'app-random-workout',
  templateUrl: './random-workout.component.html',
  styleUrls: ['./random-workout.component.scss']
})
export class RandomWorkoutComponent implements OnInit {
  muscularGroups: MuscularGroup[] = [];
  exercises: Exercise[] = [];

  selectedMuscularGroups: MuscularGroup[] = [];
  selectedExercises: Exercise[] = [];

  step: number = 1;
  exercisesQuantity: number = 5

  errorMessage: string = ''

  constructor(private exercisesService: ExercisesService) { }

  ngOnInit(): void {
    this.exercises = this.exercisesService.getExercises()
    this.muscularGroups = this.exercisesService.getMuscularGroups().map((muscularGroup) => {
      return { ...muscularGroup, isSelected: false } as MuscularGroup
    })
  }

  nextStep() {
    if (this.step == 1 && this.selectedMuscularGroups.length == 0) {
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
    this.selectedMuscularGroups = this.muscularGroups.filter(muscularGroup => muscularGroup.isSelected);
  }

  private generateWorkout() {
    const exercisesFilteredByRoutines: Exercise[] = []

    this.exercises.forEach((exercise) => {
      exercise.muscularGroupIds.forEach((muscularGroupId) => {
        this.selectedMuscularGroups.forEach((selectedMuscularGroup) => {
          if (muscularGroupId == selectedMuscularGroup.id) {
            exercisesFilteredByRoutines.push(exercise);
            return;
          }
        })
      })
    })

    const shuffledList = [...exercisesFilteredByRoutines];
    shuffledList.sort(() => Math.random() - 0.5);
    this.selectedExercises = this.removeDuplicates(shuffledList).slice(0, this.exercisesQuantity);
  }

  private removeDuplicates(exercises: Exercise[]): Exercise[] {
    return exercises.filter((obj, index, self) => {
      return index === self.findIndex(item => item.id === obj.id);
    });
  }

  showWorkoutRoutines() {
    return this.selectedMuscularGroups.map((selectedMuscularGroup) => selectedMuscularGroup.name)
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

  private showErrorMessage(message: string) {
    this.errorMessage = message
  }
}
