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
import { ChooseWordComponent } from './components/choose-word/choose-word.component';
import { FormsModule } from '@angular/forms';
import { WordCardComponent } from './components/dictionary/word-card/word-card.component';
import { CookieService } from './services/cookie.service';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { DragDropComponent } from './components/drag-drop/drag-drop.component';

const routes: Routes = [
  { path: '', redirectTo: 'dictionary', pathMatch: 'full'},
  { path: 'dictionary', component: DictionaryComponent},
  { path: 'explanations', component: ExplanationsComponent},
  { path: 'learning-game', component: LearningGameComponent},
  { path: 'assessment', component: AssessmentComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'drag-drop', component: DragDropComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    DictionaryComponent,
    ExplanationsComponent,
    LearningGameComponent,
    AssessmentComponent,
    ProfileComponent,
    ChooseWordComponent,
    WordCardComponent,
    DragDropComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    DragDropModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
