import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { ResultModel } from '../models/result-model';


@Injectable({
  providedIn: 'root',
})
export class ItunesService {
  constructor(public http: HttpClient) {}

  getResults(searchTerm: string): Observable<ResultModel> {
    let url = `https://itunes.apple.com/search?term=${searchTerm}&limit=10&callback=JSONP_CALLBACK`;

    return this.http.jsonp<ResultModel>(url, 'cb');
    // .pipe(this.handleError('getResults'));
  }

  getsongDetails(id: number) {
    let url = `https://itunes.apple.com/lookup?id=${id}`;
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.error(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
