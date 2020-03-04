import { Injectable } from '@angular/core';
import { HttpClient, HttpParams,HttpErrorResponse } from '@angular/common/http';
import {Observable,throwError} from "rxjs";
import{environment} from "../environments/environment.prod";
import { catchError } from 'rxjs/operators';

export interface location {
  longitude: number;
  latitude: string;
  cityName: Array<string>;
}

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  
  constructor(private http: HttpClient) { }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };
  
  getLocationDetails(city):Observable<any[]>{
    let params= new HttpParams().set("address",city);
    let options={params}
    return this.http.get<any[]>(environment.url,options).pipe(
      catchError(this.handleError)
    );
  }
}
