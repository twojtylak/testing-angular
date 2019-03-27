import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styleUrls: ['./incrementer.component.css']
})
export class IncrementerComponent implements OnInit {

  counter = 0;

  constructor() { }

  ngOnInit() {
  }

  incrementCounter() {
    this.counter +=1;
  }
}
