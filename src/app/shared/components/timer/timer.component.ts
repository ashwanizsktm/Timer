import { Component, OnInit } from '@angular/core';
import { MinuteSecondsPipe } from './timer.pipe'


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  providers: [MinuteSecondsPipe]
})



export class TimerComponent implements OnInit {

  dateValue = 3600 * 1000;
  timerFormat = true;
  timeLeft = 0;
  interval: any;
  isDisplay = false;
  buttonsDisplay = true;
  pauseBtn = true;
  initialValue = 0;
  secinitialValue = 0;
  customBox = false;
  quickbtnSec = true;
  startBtn = true;

  buttonsText = [
    { id: 1, btnName: "10 SEC", btnInterval: 10 },
    { id: 2, btnName: "20 SEC", btnInterval: 20 },
    { id: 3, btnName: "30 SEC", btnInterval: 30 },
    { id: 4, btnName: "40 SEC", btnInterval: 40 },
    { id: 5, btnName: "60 SEC", btnInterval: 50 },
    { id: 6, btnName: "2 MIN",  btnInterval:  120 },
    { id: 7, btnName: "3 MIN",  btnInterval: 180 },
    { id: 8, btnName: "4 MIN",  btnInterval: 240 },
    { id: 9, btnName: "5 MIN",  btnInterval: 300 },
    { id: 10,btnName: "CUSTOM", btnInterval: 0 }
  ]

  constructor() { }

  ngOnInit() {
  }

  onClick(i) {
    this.isDisplay = !this.isDisplay;
    this.buttonsDisplay = !this.buttonsDisplay;
    this.timeLeft = this.buttonsText[i].btnInterval;
    this.startInterval();
    this.pauseBtn = true;

    // Logics For custom button
    if (this.buttonsText[i].id === 10) {
      this.customBox = !this.customBox;
      this.isDisplay = true; 
      this.startBtn = true;
      this.timeLeft = 0;
      this.initialValue = 0;
      this.secinitialValue = 0;
    }
  }

  pauseTimer() {
    clearInterval(this.interval);
    // For toggling the text of button from pause to restart.
    this.pauseBtn = !this.pauseBtn;
  }

  restartTimer() {
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
    this.pauseBtn = !this.pauseBtn;
    this.timeLeft = 0;
    this.customBox = false;
  }

  incrementValue() {
    this.initialValue++;
  }

  decrementValue() {
    if (this.initialValue === 0) {
      this.initialValue;
    }
    else {
      this.initialValue -= 1;
    }
  }

  secincrementValue() {
    this.secinitialValue += 1;
  }

  secdecrementValue() {
    if (this.secinitialValue === 0) {
      this.secinitialValue = 0;
    }
    else {
      this.secinitialValue -= 1;
    }
  }

  customvalueClick() {
    if (this.timeLeft > this.initialValue && this.timeLeft > this.secinitialValue) {
      this.startInterval();
    }
    else {
      this.timeLeft = 0;
    }
   console.log(this.timeLeft = this.initialValue);
   console.log(this.timeLeft = this.secinitialValue);
    this.quickbtnSec = true;
    this.isDisplay = true;
    this.startBtn = true;
  }
}
