import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Counter',
  templateUrl: './Counter.component.html',
  styleUrls: ['./Counter.component.scss']
})
export class CounterComponent implements OnInit {

  public title: string = "Coutner Component"

  public count: number = 10;

  public decrement(): void {
    this.count++;
  }

  public increment(): void {
    this.count--;
  }



  constructor() {

  }

  ngOnInit() {
  }

}
