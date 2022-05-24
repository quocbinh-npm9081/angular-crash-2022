import { Component, OnInit } from '@angular/core';
interface IGirl {
  pId: string,
  name: string,
  image: string,
  age: number

}


@Component({
  selector: 'app-Girls',
  templateUrl: './Girls.component.html',
  styleUrls: ['./Girls.component.scss']
})


//GIRLS FATHER COMPONENT

export class GirlsComponent implements OnInit {
  public girls: IGirl[] = [
    {
      pId: "POO1",
      name: "Sam Sung A50",
      image: "https://i.pinimg.com/564x/e8/be/a2/e8bea267caafa46e2eace1266a1264f3.jpg",
      age: 18
    },
    {
      pId: "POO2",
      name: "nokia A50",
      image: "https://i.pinimg.com/564x/46/e1/02/46e102ccc81d02a46b98560d89ddfe38.jpg",
      age: 22
    },

    {
      pId: "POO3",
      name: "Iphone A50",
      image: "https://i.pinimg.com/564x/92/ec/39/92ec39856f78022dba46b8866225cd8f.jpg",
      age: 24
    },
    {
      pId: "POO4",
      name: "Xiao mi red 10",
      image: "https://i.pinimg.com/564x/54/37/22/543722ceac7254018e0059617dd097a2.jpg",
      age: 29
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
