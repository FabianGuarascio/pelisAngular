import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, map} from 'rxjs'
import { environment } from 'src/environments/environment';
import { IFavMovie } from '../types/favMovies.interface';
import { IMovieServiceResponse, IResult } from '../types/movieResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }

  getMovies():Observable<IResult[]>{
    return this.http.get<IMovieServiceResponse>(environment.urlApi)
    .pipe(
      map((movieResponse:IMovieServiceResponse)=>movieResponse.results)
    )
  }
  
  getAllFavMovies():Observable<any>{
    return this.http.get(`${environment.nodeUrl}`)
  }

  addFavMovie(body:IFavMovie):Observable<any>{
    return this.http.post(`${environment.nodeUrl}`,body)
  }


  deleteFavMovie(id:string){
    return this.http.delete(`${environment.nodeUrl}/${id}`)
  }
}
