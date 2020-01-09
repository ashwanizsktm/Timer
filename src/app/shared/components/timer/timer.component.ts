import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  dateValue = 3600 * 1000;
  timeLeft: number;
  interval: any;
  isDisplay = false;
  buttonsDisplay = true;
  pauseBtn = true;
  

  buttonsText = [
    { id: 1,  btnName: "10 SEC", btnInterval: 10 },
    { id: 2,  btnName: "20 SEC", btnInterval: 20 },
    { id: 3,  btnName: "30 SEC", btnInterval: 30 },
    { id: 4,  btnName: "40 SEC", btnInterval: 40 },
    { id: 5,  btnName: "60 SEC", btnInterval: 50 },
    { id: 6,  btnName: "2 MIN",  btnInterval: 60 },
    { id: 7,  btnName: "3 MIN",  btnInterval: 120 },
    { id: 8,  btnName: "4 MIN",  btnInterval: 180 },
    { id: 9,  btnName: "5 MIN",  btnInterval: 300 },
    { id: 10, btnName: "CUSTOM"  }
  ]

  constructor() { }

  ngOnInit() {

  }

  onClick(i) {
    this.isDisplay = !this.isDisplay;
    this.buttonsDisplay = !this.buttonsDisplay;
    this.timeLeft = this.buttonsText[i].btnInterval;
    this.startInterval();
  }

  pauseTimer() {
    clearInterval(this.interval);
    // For toggling the text of button.
    this.pauseBtn = !this.pauseBtn;
  }

  restartTimer(){
    this.startInterval();
    this.pauseBtn = !this.pauseBtn;
  }

  startInterval() {
      this.interval = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        }
      }, 1000); 
  }

  resetTimer() {
    clearInterval(this.interval);
    this.isDisplay = !this.isDisplay;
    this.buttonsDisplay = !this.buttonsDisplay;
    this.timeLeft = 0;
    this.pauseBtn = !this.pauseBtn;
  }
}
