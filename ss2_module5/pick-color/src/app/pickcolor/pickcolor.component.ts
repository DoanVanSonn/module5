import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pickcolor',
  templateUrl: './pickcolor.component.html',
  styleUrls: ['./pickcolor.component.css']
})
export class PickcolorComponent implements OnInit {
color: string;
  constructor() { }

  ngOnInit(): void {
  }

}
