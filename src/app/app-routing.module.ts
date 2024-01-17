import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomExerciseComponent } from './pages/random-exercise/random-exercise.component';
import { RandomWorkoutComponent } from './pages/random-workout/random-workout.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'random-exercise',
    component: RandomExerciseComponent,
  },
  {
    path: 'random-workout',
    component: RandomWorkoutComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
