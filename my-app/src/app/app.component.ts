import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  listaEstudiantes: any[] = [
    {nombre: "thomas", estado:"promocionado"},
    {nombre: "ana", estado:"regular"},
];