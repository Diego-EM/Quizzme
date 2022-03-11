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
  totalQuestions: number = 0;
  gamestatus: GameStatus = 0;
  showTimer: boolean = true;
  timeDone: boolean = false;
  round = Math.round;

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
        this.totalQuestions = this.questions.length;
        this.currentQuestion = this.selectQuestion();
      })
  }

  setToInitial(): void{
    this.currenAnswer = null;
    this.showTimer = true;
    this.timeDone = false;
  }

  startGame(): void { this.gamestatus = 1 }

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
    this.timeDone = true;
    this.showTimer = false;
    if (this.currenAnswer) this.correctAnswers++;
      setTimeout(()=>{
        if (this.questions.length === 0){
          this.gamestatus = 2;
        } else {
          this.currentQuestion = this.selectQuestion();
          this.setToInitial();
        }
      }, 3000)
  }

  calculatePercentage(): number{
    return Math.round((this.correctAnswers/this.totalQuestions) * 100)
  }

  showEndMessage(): string{
    const result = this.calculatePercentage();
    if (result <= 60) return "Well, good luck the next time 😉";
    else if (result < 80) return "Nice job, but you can do it better!! 👍";
    else if (result <= 99) return "Wow, great score man! 🔥";
    return "Golly!! A perfect score! 🧠";
  }

  destroyComponent(elclass: string): void{
    const container = document.querySelector('.container');
    const element = document.querySelector(`.${elclass}`);
    this.render.removeChild(container,element);
  }
}
