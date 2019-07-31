import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  

  public autores: string[];
  public texto_recibido: string;

  constructor() {
    this.autores = ['Hector Abad', 'Gabriel García Márquez', 'Mario Mendoza', 'Robert Louis Stevenson'];
  }

  buscar() {
    let t: string = '';
    let nombre_ingresado: string = '';
    let autor_ingresado: string = '';
    t = this.texto_recibido;

    let cont: number = 0;
    for (let i of t) {
      if (i != '-'){
        cont++;
      }else{
        break;
      }
    }

    for (let i = 0; i < cont; i++) {
      autor_ingresado = autor_ingresado + t[i];
    }

    for (let i = cont + 1; i < t.length; i++) {
      nombre_ingresado += t[i];
    }

    console.log(autor_ingresado);
    console.log(nombre_ingresado);
  }

  ngOnInit() {
  }

}
