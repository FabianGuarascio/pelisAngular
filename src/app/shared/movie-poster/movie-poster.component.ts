import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { addFavMovieAction } from 'src/app/home/store/actions';
import { IFavMovie } from 'src/app/home/types/favMovies.interface';
import { IResult } from 'src/app/home/types/movieResponse.interface';
import { IAppState } from 'src/app/types/app-state';

@Component({
  selector: 'app-movie-poster',
  templateUrl: './movie-poster.component.html',
  styleUrls: ['./movie-poster.component.scss']
})
export class MoviePosterComponent implements OnInit {
  @Input() movie?:IResult | null
  public posterPath:string=""
  constructor(private store:Store<IAppState>) { }

  ngOnInit(): void {
    this.posterPath = 'https://image.tmdb.org/t/p/w200'+this.movie?.poster_path
  }

  addToFav(title:any,img:any){
    let body:IFavMovie = {
      title:title,
      img:img
    }
    this.store.dispatch(addFavMovieAction({favMovie:body}))
  }

}
