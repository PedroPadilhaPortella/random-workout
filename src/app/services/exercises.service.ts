import { Injectable } from '@angular/core';
import { exercises } from '../data/exercises';
import { muscularGroups } from '../data/muscular-groups';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {
  

  constructor() { }

  getMuscularGroups() {
    return muscularGroups;
  }

  getExercises() {
    return exercises;
  }
}
