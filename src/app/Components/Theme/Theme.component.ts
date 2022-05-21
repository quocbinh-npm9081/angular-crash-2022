import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Theme',
  templateUrl: './Theme.component.html',
  styleUrls: ['./Theme.component.scss']
})
export class ThemeComponent implements OnInit {

  public darkMode: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
