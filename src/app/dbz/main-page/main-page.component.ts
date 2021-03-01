import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent{
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  personajes: Personaje[] = [
    {
      nombre: "Goku",
      poder: 15000
    },
    {
      nombre: "Vegeta",
      poder: 7500
    }
  ]

  agregar(): boolean{
    if(this.nuevo.nombre.trim().length === 0){
      return false;
    }
    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    }
    return true;
  }
}
