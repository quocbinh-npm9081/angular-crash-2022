import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-OnChangeEvent',
  templateUrl: './OnChangeEvent.component.html',
  styleUrls: ['./OnChangeEvent.component.scss']
})
export class OnChangeEventComponent implements OnInit {

  public userName: string = "";

  // public onHandleChange(event: any): void {  // neu su dung ngModel thi khong can den onChangeEvent
  //   this.userName = event.target.value;
  // };



  constructor() {
  }

  ngOnInit() {
  }

}
