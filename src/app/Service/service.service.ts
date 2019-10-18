import { Injectable } from '@angular/core';
import { CrearLibro, Resp } from '../crear-libro';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) {
    console.log('Entré al servicio');
  }

  url = 'http://localhost:4000/';

  getLibros() {
    console.log('Entre al get');
    console.log(this.url + 'libros');
    return this.http.get<CrearLibro[]>(this.url + 'libros');
  }

  postLibros(libro: CrearLibro){
    console.log(this.url + 'addlibro');
    return this.http.post<CrearLibro>(this.url + 'addlibro' , libro);
  }
}
