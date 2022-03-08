import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  Renderer2,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-quizz-info',
  templateUrl: './quizz-info.component.html',
  styleUrls: ['./quizz-info.component.css']
})
export class QuizzInfoComponent implements OnInit {

  @Input() img_preview: string = "";
  @Input() title: string = "";
  @Input() description: string = "";
  @Output() cancel: EventEmitter<any> = new EventEmitter();

  @ViewChild('quizzInfo') quizzInfo!: ElementRef<HTMLDivElement>;
  
  constructor(private render: Renderer2) { }

  ngOnInit(): void {
  }
  
  cancelClick(): void{
    const quizz_info = this.quizzInfo.nativeElement;
    quizz_info.classList.add('close');
    this.render.listen(quizz_info,'animationend',()=> this.cancel.emit() );
  }
}
