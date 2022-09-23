import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Mini Calculadora';

  n1: number = 0;
  n2: number = 0;
  resultado: number = 0;
  alerta: boolean = false;

  sumar(): void {
    this.alerta=false;
    this.resultado = this.n1+this.n2;
  }
  restar(): void {
    this.alerta=false;
    this.resultado = this.n1-this.n2;
  }
  multiplicar(): void {
    this.alerta=false;
    this.resultado = this.n1*this.n2;
  }
  dividir(): void {
    if (this.n2===0) {this.alerta = true;}
    else this.resultado = this.n1/this.n2;
  }


}
