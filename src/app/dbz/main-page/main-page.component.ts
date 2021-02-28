import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

interface Personaje{
  nombre: string,
  poder: number
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent{
  nuevo: Personaje = {
    nombre: 'Trunks',
    poder: 0
  }

  agregar(): void{
    console.log( this.nuevo );
  }
}
