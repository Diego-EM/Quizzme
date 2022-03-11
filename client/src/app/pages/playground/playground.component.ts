import {
  Component,
  OnInit,
  QueryList,
  Renderer2,
  ViewChildren
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnswerOptionComponent } from 'src/app/components/answer-option/answer-option.component';
import { Quizz, GameStatus, Question } from 'src/app/models';
import { ApiConnectionService } from 'src/app/services/api-connection.service';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

  @ViewChildren('answer') answers!: QueryList<AnswerOptionComponent>;

  quizz!: Quizz;
  questions!: Question[];
  currentQuestion?: Question;
  currenAnswer: boolean|null = null;
  correctAnswers: number = 0;
  gamestatus: GameStatus = 1;
  showTimer: boolean = true;
  timeDone: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private connect: ApiConnectionService,
    private render: Renderer2
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => {
      const id = paramMap.get('id')
      if(id) this.loadQuizz(id);
    })
  }

  loadQuizz(id: string): void{
    this.connect.getQuizz(id)
      .subscribe((res: Quizz)=> {
        this.quizz = res
        this.questions = res.questions;
        this.currentQuestion = this.selectQuestion();
      })
  }

  setToInitial(): void{
    this.currenAnswer = null;
    this.showTimer = true;
    this.timeDone = false;
  }

  startGame(): void { this.gamestatus = 0 }

  selectQuestion(): Question{
    let index = Math.floor(Math.random() * this.questions.length);
    let question = this.questions[index];
    this.questions = this.questions.filter((question, i) => i !== index );
    return question;
  }

  selectBtn(): void{
    this.answers!.forEach( (answer: AnswerOptionComponent) => {
      answer.selected = false;
    })
  }

  getAnswer(correct: boolean): void{
    this.currenAnswer = correct;
  }

  checkAnswer(): void{
    if (this.currenAnswer !== null){
      if(this.currenAnswer) this.correctAnswers++;
      this.timeUp();
    }
  }

  timeUp(): void{
    this.timeDone = true;
    this.showTimer = false;
    setTimeout(()=>{
      this.currentQuestion = this.selectQuestion();
      this.setToInitial();
    }, 3000)
  }

  destroyComponent(elclass: string): void{
    const container = document.querySelector('.container');
    const element = document.querySelector(`.${elclass}`);
    this.render.removeChild(container,element);
  }
}
