import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capi'];
  heroeBorrado: string = '' || 'Ninguno, los héroes están completos...';

  borrarHeroe(): string|void{
    this.heroeBorrado = this.heroes.pop() || 'No hay héroes para borrar.';
  }
}
