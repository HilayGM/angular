import { Component, OnInit } from '@angular/core';
import { MonstersService } from '../../services/monsters.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  monsters: any;
   
  constructor(public monster: MonstersService){}

  ngOnInit() {
    this.monster.getMonsters().subscribe(
      (r) => {this.monsters = r; console.log(r)},
      (e) => {console.error(e)}
    )
  }
}