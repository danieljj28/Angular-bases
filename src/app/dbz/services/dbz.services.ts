import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },
  {
    id: uuid(),
    name: 'goku',
    power: 9500
  },
  {
    id: uuid(),
    name: 'Veggeta',
    power: 7500
  }
  ];

  addCharacter(character: Character): void{

    const newCharacter: Character = {... character}

    this.characters.push(character);
  }

  // onDeleteCharacter(id: number){
  //   this.characters.splice(id, 1);
  // }
  deleteCharacterById(id: string){
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
