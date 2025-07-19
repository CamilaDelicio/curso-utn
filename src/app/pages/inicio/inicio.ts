import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router'; 
import { Producto, Productos } from '../../services/productos';

@Component({
  selector: 'app-inicio',
  imports: [RouterModule, RouterOutlet],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {
   productos: Producto[] = []
   loading : boolean = true
   private producto = inject(Productos)
   ngOnInit () {
    let observable = this.producto.getProductos()
    observable.subscribe(
    {
      next: (productos) => {
        console.log("El observable cambio")
        this.productos = productos;
        this.loading =false
      },
      error: (error) => {
        console.log("El observable cambio", error)
        this.loading = false
      }
    } 
  )
   }

}
