import { Injectable } from '@angular/core';
import { exercises } from '../data/exercises';
import { routines } from '../data/routines';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {
  

  constructor() { }

  getRoutines() {
    return routines;
  }

  getExercises() {
    return exercises;
  }
}
