import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.component.html',
  styleUrl: './operas-bas.component.css'
})
export class OperasBasComponent {
  num1:string='';
  num2:string='';
  resultado:number=0

 sumar(): void {
    this.resultado = parseInt(this.num1) + parseInt(this.num2);
  }

  // Resta
  restar(): void {
    this.resultado = parseInt(this.num1) - parseInt(this.num2);
  }

  // Multiplicación
  multiplicar(): void {
    this.resultado = parseInt(this.num1) * parseInt(this.num2);
  }

  // División
  dividir(): void {
    this.resultado = parseInt(this.num1) / parseInt(this.num2);
  }
}