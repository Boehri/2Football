import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { FootballResultsService } from '../football-results.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  table: any; 
  league: any; 
  gameday: any;

  constructor(private resultService: FootballResultsService ,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.league = "bl1";
    this.route.params.subscribe((params) => {
      this.league = params["league"];
      this.getTable(this.league);
      this.getCurrentGameday(this.league);
    });
  }

  getTable(league: string){
    this.resultService.getTable(league).subscribe((data) => 
    this.table = data)
  }

  getCurrentGameday(league: string){
    this.resultService.getCurrentGameday(league).subscribe((data) =>
    this.gameday = data)
  }

}
