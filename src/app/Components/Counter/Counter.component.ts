import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Counter',
  templateUrl: './Counter.component.html',
  styleUrls: ['./Counter.component.scss']
})

export class CounterComponent implements OnInit {

  public title: string = "Coutner Component"

  public count: number = 10;

  public increment(): void {
    this.count++;

  }

  public decrement(): void {
    if (this.count == 0) this.count = 0;

    else this.count--;

  }

  constructor() {

  }

  ngOnInit() {
  }

}
