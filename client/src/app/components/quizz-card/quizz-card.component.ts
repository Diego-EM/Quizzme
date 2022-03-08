import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { QuizzInfo } from 'src/app/models/quizz';

@Component({
  selector: 'app-quizz-card',
  templateUrl: './quizz-card.component.html',
  styleUrls: ['./quizz-card.component.css']
})
export class QuizzCardComponent implements OnInit {

  @Input() quizz!: QuizzInfo;
  @Output() sendId: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

  emitId(): void{
    this.sendId.emit(this.quizz._id);
  }
}
