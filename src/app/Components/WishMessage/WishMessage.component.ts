import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-WishMessage',
  templateUrl: './WishMessage.component.html',
  styleUrls: ['./WishMessage.component.scss']
})
export class WishMessageComponent implements OnInit {

  public title: string = "wish message";

  public message: string = "Hello Angular";

  public onHandleClick(msg: string): void {  // event binding with param
    this.message = msg;
  }



  constructor() {
    this.onHandleClick
  }

  ngOnInit() {
  }

}
