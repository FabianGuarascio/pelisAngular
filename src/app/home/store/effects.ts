import {Injectable} from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MovieService } from '../services/movie.service';
import { getMoviesAction, getMoviesSuccessAction } from './actions';
import{mergeMap, map}from 'rxjs'
@Injectable()
export class MovieEffects{

getMovies$=createEffect(()=>
    this.actions$.pipe(
        ofType(getMoviesAction),
        mergeMap(
            ()=> this._movieService.getMovies()
            .pipe(
                map(movies=>(getMoviesSuccessAction({results:movies})))
            )
        )
    )
)

    constructor(
        private _movieService:MovieService,
        private actions$:Actions
        ){}
}