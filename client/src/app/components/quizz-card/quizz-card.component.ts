import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quizz-card',
  templateUrl: './quizz-card.component.html',
  styleUrls: ['./quizz-card.component.css']
})
export class QuizzCardComponent implements OnInit {

  @Input() id: string = "";
  @Input() img_preview: string = "";
  @Input() title: string = "";
  @Output() sendId: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

  emitId(): void{
    this.sendId.emit(this.id);
  }
}
