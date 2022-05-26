import { Injectable } from '@angular/core';
import { IEmployee } from '../Models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeSevService {

  private employee: IEmployee = {
    idE: "P01",
    name: "CAO QUOC BINH",
    age: 21,
    designation: "Leader",
    dateJoin: new Date(),
    salary: 1400000
  };


  constructor() { };

  public getEmployee(): IEmployee {
    return this.employee;
  };
}
