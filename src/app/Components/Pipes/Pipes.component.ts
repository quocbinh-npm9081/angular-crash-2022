import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../../Models/Employee';
@Component({
  selector: 'app-Pipes',
  templateUrl: './Pipes.component.html',
  styleUrls: ['./Pipes.component.scss']
})
export class PipesComponent implements OnInit {

  public employee: IEmployee = {
    idE: "P01",
    name: "CAO QUOC BINH",
    age: 21,
    designation: "Leader",
    dateJoin: new Date(),
    salary: 1400000
  }


  constructor() { }

  ngOnInit() {
  }

}
