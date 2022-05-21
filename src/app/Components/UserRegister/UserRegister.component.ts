import { Component, OnInit } from '@angular/core';


interface IUser {
  email: string,
  password: string,
  gender: string,
  check: boolean,
  bio: string
};

@Component({
  selector: 'app-UserRegister',
  templateUrl: './UserRegister.component.html',
  styleUrls: ['./UserRegister.component.scss']
})




export class UserRegisterComponent implements OnInit {

  public user: IUser = {
    email: '',
    password: '',
    gender: '',
    check: false,
    bio: ''
  }

  constructor() { }

  ngOnInit() {
  }

}
