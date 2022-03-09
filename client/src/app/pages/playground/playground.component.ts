import {
  Component,
  OnInit,
  Renderer2
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quizz, GameStatus } from 'src/app/models';
import { ApiConnectionService } from 'src/app/services/api-connection.service';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

  quizz!: Quizz;
  gamestatus: GameStatus = 1;

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
    console.log(this.gamestatus)
  }

  loadQuizz(id: string): void{
    this.connect.getQuizz(id)
      .subscribe((res: Quizz)=> this.quizz = res)
  }

  destroyComponent(elclass: string){
    const container = document.querySelector('.container');
    const element = document.querySelector(`.${elclass}`);
    this.render.removeChild(container,element);
  }

  startGame(): void { this.gamestatus = 0 }
}
