import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  weight: number;
  gender: string;
  genders = [];
  time: number;
  bottles: number;
  promilles: number;


  constructor() {}

  ngOnInit() {
    this.genders.push("Male");
    this.genders.push("Female");

    this.gender="Male";
    this.weight=80;
    this.time=6;
    this.bottles=12;

  }
  calculate() {
    const litres = this.bottles * 0.33;
    let grams = litres * 8 * 4.5;

    const burning = this.weight / 10;
    grams = grams - (burning * this.time);

    if (this.gender === "Male") {
      this.promilles = grams / (this.weight * 0.7);
    }else {
      this.promilles = grams / (this.weight * 0.7);
    }

  }
}
