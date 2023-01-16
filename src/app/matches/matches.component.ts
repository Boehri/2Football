import { Component, OnInit } from '@angular/core';
import { FootballResultsService } from '../football-results.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: "app-matches",
  templateUrl: "./matches.component.html",
  styleUrls: ["./matches.component.scss"],
})
export class MatchesComponent implements OnInit {
  currentMatches: any;
  

  constructor(private resultService: FootballResultsService, private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.getMatchesofMatchDay();
  }

  getMatchesofMatchDay() {
    this.resultService.getResults().subscribe((data) => {
      this.currentMatches = data;
    });
  }
}
