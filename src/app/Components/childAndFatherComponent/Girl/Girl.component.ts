import { Component, Input, OnInit } from '@angular/core';

interface IGirl {
  pId: string,
  name: string,
  image: string,
  age: number

}

@Component({
  selector: 'app-Girl',
  templateUrl: './Girl.component.html',
  styleUrls: ['./Girl.component.scss']
})


//GIRLS CHILD COMPONENT

export class GirlComponent implements OnInit {

  //GET PROP 
  @Input() girl: IGirl | undefined;


  constructor() { }

  ngOnInit() {
  }

}
