import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  imports: [FormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {
  usuario = {
    nombre: '',
    correo: '',
    telefono: '',
    edad: null as number | null,
    password: '',
    confirmar: ''
  };

  datosEnviados: any = null;

  registrar() {
    this.datosEnviados = { ...this.usuario };
  }
}