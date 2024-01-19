import { Component, OnInit } from '@angular/core';
import { Exercise } from '../../data/exercises';
import { MuscularGroup } from '../../data/muscular-groups';
import { ExercisesService } from './../../services/exercises.service';

@Component({
  selector: 'app-random-exercise',
  templateUrl: './random-exercise.component.html',
  styleUrls: ['./random-exercise.component.scss']
})
export class RandomExerciseComponent implements OnInit {
  muscularGroups: MuscularGroup[] = [];
  exercises: Exercise[] = [];
  selectedMuscularGroupId: number = 1
  sortedExercise!: Exercise;

  constructor(private exercisesService: ExercisesService) { }

  ngOnInit(): void {
    this.muscularGroups = this.exercisesService.getMuscularGroups()
    this.exercises = this.exercisesService.getExercises()
  }

  sortExercise() {
    const exercisesFilteredByMuscularGroup: Exercise[] = []

    this.exercises.forEach((exercise) => {
      exercise.muscularGroupIds.forEach((muscularGroupId) => {
        if(muscularGroupId == this.selectedMuscularGroupId) {
          exercisesFilteredByMuscularGroup.push(exercise);
        }
      })
    })

    const randomId = Math.floor(Math.random() * exercisesFilteredByMuscularGroup.length);
    this.sortedExercise = exercisesFilteredByMuscularGroup[randomId];
  }
}
