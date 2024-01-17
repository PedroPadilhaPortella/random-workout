import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RandomExerciseComponent } from './pages/random-exercise/random-exercise.component';
import { RandomWorkoutComponent } from './pages/random-workout/random-workout.component';
import { HomeComponent } from './pages/home/home.component';
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RandomExerciseComponent,
    RandomWorkoutComponent,
    HomeComponent,
    AppBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
