import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/Models/User';

@Component({
  selector: 'app-UserItem',
  templateUrl: './UserItem.component.html',
  styleUrls: ['./UserItem.component.scss']
})
export class UserItemComponent implements OnInit {

  @Input() prop_user: IUser | undefined;

  // public user: any = JSON.stringify(this.prop_user);

  constructor() { }

  ngOnInit() {// useEffect
    //console.log(typeof this.prop_user);

  }

}
