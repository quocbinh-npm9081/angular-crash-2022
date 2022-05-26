import { Component, OnInit } from '@angular/core';
import { EmployeeSevService } from 'src/app/Sevices/employeeSev.service';
import { IEmployee } from '../../Models/Employee';
@Component({
  selector: 'app-Pipes',
  templateUrl: './Pipes.component.html',
  styleUrls: ['./Pipes.component.scss']
})
export class PipesComponent implements OnInit {

  public employee: IEmployee = {} as IEmployee;



  constructor(private employeeSev: EmployeeSevService) {
    this.employee = this.employeeSev.getEmployee();

  }

  ngOnInit() {
  }

}
