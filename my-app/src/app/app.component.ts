import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})


export class AppComponent {
    listaEstudiantes: any[] = [
        { nombre: "thomas", estado: "promocionado" },
        { nombre: "juan", estado: "regular" },
        {nombre : "martin", estado: "libre"}
    ]

    mostrar = false;
    toogle(): void {
        this.mostrar = !this.mostrar;

    }
    


}