import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root",
})
export class FootballResultsService {
  constructor(private http: HttpClient) {}

  getResults() {
    return this.http.get("https://www.openligadb.de/api/getmatchdata/bl1");
  }
}


