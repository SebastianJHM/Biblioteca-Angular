import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { CrearLibro } from '../crear-libro';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {

  @Input() public dato;


  public libros: Array<CrearLibro>;

  constructor() {
    this.libros = [
      {autor: 'Hector Abad', nombre: 'El olvido que seremos', fecha: new Date()},
      {autor: 'Gabriel García Márquez', nombre: 'Cien años de soledad', fecha: new Date()},
      {autor: 'Mario Mendoza', nombre: 'Buda Blues', fecha: new Date()},
      {autor: 'Robert Louis Stevenson', nombre: 'Jekill y Hyde', fecha: new Date()}
    ];
   }

  ngOnInit() {

  }

}
