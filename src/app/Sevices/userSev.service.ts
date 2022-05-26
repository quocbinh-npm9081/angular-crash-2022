import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser, IGeo, IAddress, ICompany } from '../Models/User';
@Injectable({
  providedIn: 'root'
})
export class UserSevService {

  constructor(private httpClient: HttpClient) {


  }

  public getUser(): Observable<IUser[]> {
    const URLdata = 'https://jsonplaceholder.typicode.com/users';
    return this.httpClient.get<IUser[]>(URLdata)
  }

}
