import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ToggleShowPassword',
  templateUrl: './ToggleShowPassword.component.html',
  styleUrls: ['./ToggleShowPassword.component.scss']
})
export class ToggleShowPasswordComponent implements OnInit {

  public password: string = "";
  public inputType: string = "password";

  public onHandleChange(event: any): void {
    this.password = event.target.value;
  };

  public onHandleToggleShowPassword(e: any): void {
    if (e.target.checked) this.inputType = "text";
    else this.inputType = "password";
  }



  constructor() { }

  ngOnInit() {
  }

}
