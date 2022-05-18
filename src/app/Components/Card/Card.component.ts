import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Card',
  templateUrl: './Card.component.html',
  styleUrls: ['./Card.component.scss']
})
export class CardComponent implements OnInit {


  // PROP BINDING

  public title: string = "card component";

  public image: string = "assets/img/933e9da0-51a9-4bc9-930d-49851fc50117.jpg";

  public time: string = new Date().toLocaleTimeString();

  //DATA BINDING

  public getDate(): string {
    return new Date().toLocaleDateString();

  }

  public updateTime(): void {
    setInterval(() => {
      this.time = new Date().toLocaleTimeString();

    }, 1000);

  }

  constructor() {
    this.updateTime()
  }

  ngOnInit() {

  }

}
