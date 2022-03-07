import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  
  constructor() { }

  ngOnInit(): void {
  }
  
  cancelClick(): void{
    this.cancel.emit();
  }
}
