import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto, Productos } from '../../services/productos';

@Component({
  selector: 'app-producto-detalle',
  imports: [],
  templateUrl: './producto-detalle.html',
  styleUrl: './producto-detalle.css'
})
export class ProductoDetalle implements OnInit {
  producto: Producto | undefined;
  private productosService = inject(Productos);
  private route = inject(ActivatedRoute);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productosService.getProductos().subscribe(productos => {
      this.producto = productos.find(p => p.id === id);
   });
    }

}
