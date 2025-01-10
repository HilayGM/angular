import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'mary jane'

  contructor(){
    setInterval( ()=>this.nombre= 'Dr Sexo' , 4000)
  };
}
