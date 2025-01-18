import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dados';

  dadoizquierdo = '../assets/img/dice1.png';
  dadoDerecho = '../assets/img/dice4.png';

  numero1: number = 0;
  numero2: number = 0;

  tirarDados(): void {
    // Cambiar los dados aleatoriamente cada 100ms durante 5 segundos
    const interval = setInterval(() => {
      this.numero1 = Math.floor(Math.random() * 6) + 1;
      this.numero2 = Math.floor(Math.random() * 6) + 1;

      this.dadoizquierdo = `../assets/img/dice${this.numero1}.png`;
      this.dadoDerecho = `../assets/img/dice${this.numero2}.png`;
    }, 100);

    // Detener los cambios después de 5 segundos
    setTimeout(() => {
      clearInterval(interval);

      // Generar el resultado final
      this.numero1 = Math.floor(Math.random() * 6) + 1;
      this.numero2 = Math.floor(Math.random() * 6) + 1;

      this.dadoizquierdo = `../assets/img/dice${this.numero1}.png`;
      this.dadoDerecho = `../assets/img/dice${this.numero2}.png`;
    }, 3000);
  }

}
