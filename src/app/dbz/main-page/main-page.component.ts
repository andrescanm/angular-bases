import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent{
  agregar(): void{
    console.log("TEST - OK!!!");
  }
}
