import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  edad=25;
  peso=70;
  altura=170;
  sexo = 'masculino';


  constructor() { }

  ngOnInit(): void {
  }
 cambiarAltura(event:any){
//  console.log(event.target.value);
  this.altura = event.target.value;
 }
 masculino(): void {
  this.sexo = 'masculino';
 }
 femenino(): void {
  this.sexo = 'femenino';
 }
}
