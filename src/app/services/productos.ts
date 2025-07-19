import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precioOriginal: number;
  precioDescuento: number;
  imagen: string;
}


@Injectable({
  providedIn: 'root'
})
export class Productos {
   private url = 'assets/data/productos.json'
   constructor(private http: HttpClient) {}
  

getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url);
  }  }
