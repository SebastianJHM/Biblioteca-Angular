import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { CrearLibro } from '../crear-libro';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {
  data: any;

  constructor(private httpService: ServiceService) {
    this.libros = [
      {autor: 'Hector Abad', nombre: 'El olvido que seremos', fecha: ''},
      {autor: 'Gabriel García Márquez', nombre: 'Cien años de soledad', fecha: ''},
      {autor: 'Mario Mendoza', nombre: 'Buda Blues', fecha: ''},
      {autor: 'Robert Louis Stevenson', nombre: 'Jekill y Hyde', fecha: ''}
    ];
   }

  @Input() dato: string;

  public libros: Array<CrearLibro>;
  public librosService: CrearLibro[];
  public AutoresSend = [];
  @Output() messageEvent = new EventEmitter<string[]>();


  getLibros() {
    this.httpService.getLibros().subscribe((data: Array<CrearLibro>) => {
      this.librosService = data;
      // tslint:disable-next-line: forin
      for ( let i in this.librosService) {
        this.AutoresSend.push(this.librosService[i].autor);
      }
    });
    this.EnviarAutores();
  }

  EnviarAutores() {
    console.log(this.AutoresSend);
    this.messageEvent.emit(this.AutoresSend);
  }

  ngOnInit() {
    this.getLibros();
  }


}
