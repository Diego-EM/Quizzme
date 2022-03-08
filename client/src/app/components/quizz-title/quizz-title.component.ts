import {
  Component,
  OnInit,
  Input,
  Output,
  ViewChild,
  ElementRef,
  Renderer2,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-quizz-title',
  templateUrl: './quizz-title.component.html',
  styleUrls: ['./quizz-title.component.css']
})
export class QuizzTitleComponent implements OnInit {

  @ViewChild('quizzTitle') titleElement!: ElementRef<HTMLHeadingElement>;

  @Input() title: string = "";
  @Output() component: EventEmitter<any> = new EventEmitter();

  constructor(
    private render: Renderer2
  ) { }

  ngOnInit(): void {
  }
  
  destroy(timer: number, elclass: string): void{
    const title = this.titleElement.nativeElement;
    setTimeout(()=>{
      title.classList.add(elclass)
    }, timer)
    this.render.listen(title,'animationend',()=>{
      this.component.emit();
    })
  }
}
