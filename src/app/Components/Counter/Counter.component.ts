import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Counter',
  templateUrl: './Counter.component.html',
  styleUrls: ['./Counter.component.scss']
})
export class CounterComponent implements OnInit {

  public title: string = "Coutner Component"

  constructor() { }

  ngOnInit() {
  }

}
