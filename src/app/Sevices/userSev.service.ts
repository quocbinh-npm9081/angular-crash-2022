import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../Models/User';
import { throwError, catchError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserSevService {


  constructor(private http: HttpClient) { }

  public getUser(): Observable<IUser[]> {
    const URLdata = 'https://jsonplaceholder.typicode.com/userss';
    return this.http.get<IUser[]>(URLdata).pipe(catchError(this.handleError));
  };

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      //  máy khác hoặc mạng bị lỗi
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      //backend trả dữ liệu không thành công
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }


}
