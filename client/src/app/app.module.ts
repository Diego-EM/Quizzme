import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizzCardComponent } from './components/quizz-card/quizz-card.component';
import { QuizzInfoComponent } from './components/quizz-info/quizz-info.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizzCardComponent,
    QuizzInfoComponent
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
