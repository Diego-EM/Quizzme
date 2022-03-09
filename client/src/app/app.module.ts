import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizzCardComponent } from './components/quizz-card/quizz-card.component';
import { QuizzInfoComponent } from './components/quizz-info/quizz-info.component';
import { PlaygroundComponent } from './pages/playground/playground.component';
import { HomeComponent } from './pages/home/home.component';
import { QuizzTitleComponent } from './components/quizz-title/quizz-title.component';
import { TimerComponent } from './components/timer/timer.component';
import { QuestionCardComponent } from './components/question-card/question-card.component';
import { AnswerOptionComponent } from './components/answer-option/answer-option.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizzCardComponent,
    QuizzInfoComponent,
    PlaygroundComponent,
    HomeComponent,
    QuizzTitleComponent,
    TimerComponent,
    QuestionCardComponent,
    AnswerOptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
