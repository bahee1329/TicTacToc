import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Winnerobj } from './../Types';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  winnerobject!: Winnerobj;

  constructor(private http: HttpClient) {}

  //post request
  postTheWinner(winner: string): Observable<any> {
    this.winnerobject = {
      winner: winner,
    };
    console.log(this.winnerobject);
    return this.http.post(
      'http://localhost:8089/api/v1/winner/save',
      this.winnerobject
    );
  }
}
