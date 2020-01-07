import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  timeLeft: number = 10;
  interval;
  isDisplay =false;
  buttonsDisplay = true;


 

  buttonsText = [
    {id: 1, btnName: "10 SEC"},
    {id: 2, btnName: "20 SEC"},
    {id: 3, btnName: "30 SEC"},
    {id: 4, btnName: "40 SEC"},
    {id: 5, btnName: "60 SEC"},
    {id: 6, btnName: "2 MIN"},
    {id: 7, btnName: "3 MIN"},
    {id: 8, btnName: "4 MIN"},
    {id: 9, btnName: "5 MIN"},
    {id: 10,btnName: "CUSTOM"}
  ]

  constructor() { }

  ngOnInit() {

  }

  onClick() {
    this.isDisplay = !this.isDisplay;
    this.buttonsDisplay = !this.buttonsDisplay;
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } 
    } , 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

 resetAgain() {
   this.isDisplay = !this.isDisplay;
   this.buttonsDisplay = !this.buttonsDisplay;
 }
  

}
