import {Component, OnInit} from "@angular/core";
import {FootballResultsService} from "../football-results.service";
import {DatePipe} from "@angular/common";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: "app-matches",
  templateUrl: "./matches.component.html",
  styleUrls: ["./matches.component.scss"],
})
export class MatchesComponent implements OnInit {
  currentMatches: any;
  league: any;

  constructor(private resultService: FootballResultsService, private datePipe: DatePipe, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.league = 'bl1'
    this.route.params.subscribe((params) => {
      this.league = params["league"];
      this.getMatchesofMatchDay(this.league);
    });
  }

  getMatchesofMatchDay(league: string) {
    this.resultService.getResults(this.league).subscribe((data) => {
      this.currentMatches = data;
    });
  }
}
