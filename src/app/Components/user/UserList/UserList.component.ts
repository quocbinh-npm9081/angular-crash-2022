import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/Models/User';
import { UserSevService } from 'src/app/Sevices/userSev.service';

@Component({
  selector: 'app-UserList',
  templateUrl: './UserList.component.html',
  styleUrls: ['./UserList.component.scss']
})
export class UserListComponent implements OnInit {

  public users: IUser[] = [] as IUser[];
  public errorMsgs: string | undefined = undefined;
  constructor(private userSev: UserSevService) {
    //this.user = this.userSev.getUser();  // ko nen khai bao trong ham tao

  }

  ngOnInit() {
    // this.userSev.getUser().subscribe((data: IUser[]) => // <--- life circle 
    //   this.users = data
    // );
  }

  public onHandleGetUser(): any {

    this.userSev.getUser().subscribe((data: IUser[]) => // <--- life circle 
    { this.users = data }, (error) => this.errorMsgs = error
    );

  }

}
