import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient} from "@angular/common/http"


@Injectable()

export class MonstersService {
    private API= "https://digimon-api.vercel.app/api/digimon"

    constructor(public http : HttpClient) {}

    public getMonsters(): Observable<any> {
        return this.http.get(this.API)
    }
}