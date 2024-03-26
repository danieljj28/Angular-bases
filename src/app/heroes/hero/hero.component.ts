import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironam';
  public age: number = 45;

  get capitalizedName():String{
    return this.name.toUpperCase();
  }

  getHeroDescription(): string{
    return `${this.name} - ${this.age}`;
  }

  changeName(): void{
    this.name = 'SpiderMan';
  }

  changeAge(): void{
    this.age = 20;
  }

  reset(): void{
    this.name = 'Ironman';
    this.age = 45;
  }
}
