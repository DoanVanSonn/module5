import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }
result: number;
  ngOnInit(): void {
  }

  sum(f1: string, f2: string){
    this.result = +f1 + +f2;
  }

  sub(f1: string, f2: string) {
    this.result = +f1 - +f2;
  }

  div(f1: string, f2: string) {
    this.result = +f1 / +f2;
  }

  mul(f1: string, f2: string) {
    this.result = +f1 * +f2;
  }
}
