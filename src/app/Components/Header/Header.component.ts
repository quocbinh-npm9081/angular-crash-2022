import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: String | undefined;

  constructor() { }

  ngOnInit() {
    title: "Header"
  }

}
