import { Component, OnInit } from '@angular/core';
import { Flight } from '@flight-workspace/flight-api';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FlightService } from '@flight-workspace/flight-api';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  from: string = 'Hamburg'; // in Germany
  to: string = 'Graz'; // in Austria

  get flights() {
    return this.flightService.flights;
  }

  // "shopping basket" with selected flights
  basket: object = {
    "3": true,
    "5": true
  };

  constructor(
    private flightService: FlightService) {
  }

  ngOnInit() {
  }

  search(): void {

    if (!this.from || !this.to) return;

    this.flightService
        .load(this.from, this.to);
  }

}