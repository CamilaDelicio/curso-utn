import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { ProductoDetalle } from './pages/producto-detalle/producto-detalle';
import { Contacto } from './pages/contacto/contacto';
import { Bienvenida } from './bienvenida/bienvenida';

export const routes: Routes = [
  { path: '', 
    component: Bienvenida },
  { 
    path: 'inicio', 
    component: Inicio },
  { path: 'producto/:id', 
    component: ProductoDetalle},
  { path: 'contacto',
     component: Contacto }
];


