import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:string = 'ironman';
  public age:number =24;
  get capitalizeName():string{
    return this.name.toUpperCase();
  }
  getHeroDescription():string{
    return `${this.name} is ${this.age} years old`;
  }
  changeName():void{
    this.name= 'pedrito pascal'
  }
  changeAge():void{
    this.age=30;
  }
}
