import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DictionaryComponent } from '../app/components/dictionary/dictionary.component';
import { ExplanationsComponent } from './components/explanations/explanations.component';
import { LearningGameComponent } from './components/learning-game/learning-game.component';
import { AssessmentComponent } from './components/assessment/assessment.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  { path: '', redirectTo: 'dictionary', pathMatch: 'full'},
  { path: 'dictionary', component: DictionaryComponent},
  { path: 'explanations', component: ExplanationsComponent},
  { path: 'learning-game', component: LearningGameComponent},
  { path: 'assessment', component: AssessmentComponent},
  { path: 'profile', component: ProfileComponent},
  
]

@NgModule({
  declarations: [
    AppComponent,
    DictionaryComponent,
    ExplanationsComponent,
    LearningGameComponent,
    AssessmentComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
