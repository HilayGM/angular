import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DigiComponent } from './components/digi/digi.component';
import { MonstersService } from './services/monsters.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DigiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    MonstersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
