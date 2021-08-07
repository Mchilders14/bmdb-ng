import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieCollection } from '../model/movieCollection.class';

@Injectable({
  providedIn: 'root'
})
export class MovieCollectionService {

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<MovieCollection[]>{
    return this.http.get(URL + '/') as Observable<MovieCollection[]>;
  }
}
