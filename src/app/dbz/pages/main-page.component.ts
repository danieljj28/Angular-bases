import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.services';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent{
  constructor(private dbzService: DbzService){}

  get characters(): Character[]{
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string): void{
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character){
    this.dbzService.addCharacter(character)
  }
}
