import { TestBed } from '@angular/core/testing';

import { FootballResultsService } from './football-results.service';

describe('FootballResultsService', () => {
  let service: FootballResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FootballResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
