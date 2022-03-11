import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  Renderer2
} from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})

export class TimerComponent implements OnInit {

  @Input() time: number = 10;
  @Input() type: string = "small";
  @Output() gamestart: EventEmitter<any> = new EventEmitter();
  @Output() timeDone: EventEmitter<any> = new EventEmitter();

  timer = setInterval(()=> { this.time--; this.checkTime(); }, 1000);

  constructor(private render: Renderer2) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void{}

  checkTime(): void{
    if (this.time === 1) {
      clearInterval(this.timer);
      if (this.type === "small") this.timeUp();
      else this.removeTimer();
    }
  }

  removeTimer(): void{
    const timer = document.querySelector('.timer');
    this.render.listen(timer,'animationiteration',()=>{
      timer?.classList.add('disappear');
      this.render.listen(timer,'animationend',()=>{
        this.gamestart.emit();
      })
    })
  }

  timeUp():void {
    setTimeout(()=> this.timeDone.emit(), 1000);
  }
}
