import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pianos';

  aplicacion(numero: number): void {
    const audio = new Audio();
    audio.src = `../assets/sonidos/note${numero}.wav`; // Ruta corregida
    audio.load();
    audio.play();
  }
  
}
