import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Option } from 'src/app/models';

@Component({
  selector: 'app-answer-option',
  templateUrl: './answer-option.component.html',
  styleUrls: ['./answer-option.component.css']
})
export class AnswerOptionComponent implements OnInit {
  
  @Input() option!: Option;
  @Input() selected: boolean = false;
  @Input() time_up: boolean = false;
  @Output() clickOnBtn: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  selectBtn(): void{
    if (!this.time_up){
      this.clickOnBtn.emit(this.option.correct);
      this.selected = true;
    }
  }
}
