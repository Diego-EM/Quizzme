import {
  Component,
  OnInit,
  Renderer2
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quizz } from 'src/app/models/quizz';
import { ApiConnectionService } from 'src/app/services/api-connection.service';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

  quizz!: Quizz;

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
      .subscribe((res: Quizz)=> this.quizz = res)
  }

  destroyComponent(elclass: string){
    const container = document.querySelector('.container');
    const element = document.querySelector(`.${elclass}`);
    this.render.removeChild(container,element);
  }
}
