import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuizzInfo, Quizz } from '../models/quizz';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {

  url: string = "http://localhost:3000/api/quizz";

  constructor(private connect: HttpClient) { }

  getQuizzes(){
    return this.connect.get<QuizzInfo[]>(this.url);
  }

  getQuizz(id: string){
    return this.connect.get<Quizz>(`${this.url}/${id}`);
  }
}
