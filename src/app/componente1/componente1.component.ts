import { Component, OnInit, Input, HostListener, Output, EventEmitter} from '@angular/core';
import { CrearLibro } from '../crear-libro';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  public libroPost: CrearLibro;
  public autores: string[];
  public AutoresRecibidos: string[] = [];
  public texto_recibido: string;
  public autor_seleccionado: string = 'default';
  public a_select: string;

  constructor(private http: ServiceService) {
    this.autores = ['Hector Abad', 'Gabriel García Márquez', 'Mario Mendoza', 'Robert Louis Stevenson'];
    this.libroPost = { autor: '', nombre: '', fecha: '' };
  }

  miformato(mydate: Date) {
    // tslint:disable-next-line: max-line-length
    const months = ['Enero', 'Febrero', 'Marzo', 'Abri', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']; 
    const dia = mydate.getDate();
    const mes = months[mydate.getMonth()];
    const anno = mydate.getFullYear();
    const text: string = String(dia)  + ' de ' + String(mes) + ' del ' + String(anno);
    return(text);
  }

  buscar(x: string) {
    const t = x.split('-');
    this.libroPost.autor = t[0];
    this.libroPost.nombre = t[1];
    this.libroPost.fecha = this.miformato(new Date());
    this.http.postLibros(this.libroPost).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log('Algo anda mal');
      }
    );
  }

  recibirAutores($event: string[]) {
    console.log($event);
    this.AutoresRecibidos = $event;
  }

  filtrar(y: string) {
    console.log(y);
    this.a_select = y;
  }

  ngOnInit() {
  }

}
