import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface Consulta{
  nombre: string, 
  email: string,
  mensaje: string
}

@Component({
  selector: 'app-contacto',
  imports: [FormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class Contacto {

  consultas: Consulta [] = [
  {
    nombre: "Camila",
    email: "cami@test.com",
    mensaje: "Hola, ¿cuánto sale el mousse inalámbrico?"
  },
  {
    nombre: "Lucas",
    email: "lucas@mail.com",
    mensaje: "Hola, ¿la notebook Lenovo que ofrecen viene con Windows preinstalado?"
  },
  {
    nombre: "Vale",
    email: "valen@mail.com",
    mensaje: "Estoy buscando un mouse inalámbrico"
  },
  {
    nombre: "Gonza",
    email: 'gonzi@mail.com',
    mensaje: "¿Realizan envíos Maipú Mendoza?"
  }
];
enviarFormulario (){
  console.log("enviar formulario", this.estado_formulario)
   this.consultas.push({ 
    nombre: this.estado_formulario.nombre,
    email: this.estado_formulario.email,
    mensaje: this.estado_formulario.mensaje
  });
}
 estado_formulario = {
    nombre: '',
    email: '',
    mensaje: ''
  };
}
