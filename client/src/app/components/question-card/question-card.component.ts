import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent implements OnInit {

  @Input() question: string|undefined = "¿?";

  constructor() { }

  ngOnInit(): void {
  }

}
