import { Component } from '@angular/core';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class counterComponent {
  public title: string = 'Hola Mundo';
  public value: number = 10;

  changeValue(num: number):void{
    this.value += num;
  }

  resetValue(): void{
    this.value = 10;
  }
}
