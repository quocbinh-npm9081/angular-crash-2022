import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-AuthUser',
  templateUrl: './AuthUser.component.html',
  styleUrls: ['./AuthUser.component.scss']
})
export class AuthUserComponent implements OnInit {

  public isLogged: boolean = false;

  public onHandleClickLogin(): void {
    this.isLogged = true
  }


  public onHandleClickLogout(): void {
    this.isLogged = false
  }


  constructor() { }

  ngOnInit() {
  }

}
