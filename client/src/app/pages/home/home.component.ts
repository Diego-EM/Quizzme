import { Component, OnInit } from '@angular/core';
import { QuizzInfo } from '../../models/quizz';
import { ApiConnectionService } from '../../services/api-connection.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //The quizz info is stored and displayed when a quizz card is clicked
  selected_quizz: QuizzInfo|undefined;
  //Store all quizzes in an array
  quizzes!: Array<QuizzInfo>;
  message: string|undefined;
  
  constructor(private connect: ApiConnectionService){}

  ngOnInit(): void{
    this.connect.getQuizzes()
      .subscribe(
        (data: QuizzInfo[]) => {
          this.quizzes = data;
        },
        (err: Error) =>{
          this.message = "No quizzes available 😔";
          console.error(`An error has ocurred: ${err.message}`);
          console.error(err);
        },
        ()=>{
          if (this.quizzes.length <= 0) this.message = "No quizzes available 😔";
        })
  }

  displayInfo(id: string){
    let index = this.quizzes.findIndex( (quizz: QuizzInfo) => quizz._id === id)
    this.selected_quizz = this.quizzes[index];
  }

  deselectQuizz(): void{
    this.selected_quizz = undefined;
  }

}
