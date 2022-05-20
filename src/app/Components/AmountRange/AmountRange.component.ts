import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-AmountRange',
  templateUrl: './AmountRange.component.html',
  styleUrls: ['./AmountRange.component.scss']
})
export class AmountRangeComponent implements OnInit {

  public amount: string = "1000";

  constructor() { }

  ngOnInit() {
  }

}
