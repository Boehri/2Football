import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root",
})
export class FootballResultsService {
  constructor(private http: HttpClient) {}

  getResults(league: string) {
    return this.http.get(`https://www.openligadb.de/api/getmatchdata/${league}`);
  }
  getTable(league: string){
    return this.http.get(`https://www.openligadb.de/api/getbltable/${league}/2022`);
  }
  getCurrentGameday(league: string){
    return this.http.get(`https://www.openligadb.de/api/getcurrentgroup/${league}`);
  }
}


