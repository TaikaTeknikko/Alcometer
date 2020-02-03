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
  times = [];
  time: string;
  bottle: string;
  bottles = [];
  promilles: number;

  
  constructor() {}

  ngOnInit() {
    this.genders.push("Male");
    this.genders.push("Female");

    for(let i=0; i<=30; i++){
      this.bottles.push(i);
    }

    for(let i=0; i<=24; i++){
      this.times.push(i);
    }

      this.gender="Male";
      this.weight=80;
      this.time="6";
      this.bottle="12"; 
  }
    

    calculate() {
      const litres = parseInt(this.bottle) * 0.33;
      let grams = litres * 8 * 4.5;
  
      const burning = this.weight / 10;
      grams = grams - (burning * parseInt(this.time));
  
      if (this.gender === "Male") {
        this.promilles = grams / (this.weight * 0.7);
      }else {
        this.promilles = grams / (this.weight * 0.6);
      }
      if (this.promilles < 0) {
        this.promilles = 0;
      }
  
    }
  }