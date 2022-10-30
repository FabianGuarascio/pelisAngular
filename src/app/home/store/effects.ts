import {Injectable} from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MovieService } from '../services/movie.service';
import { addFavMovieAction, addFavMovieFailureAction, addFavMovieSuccessAction, deleteFavMovieAction, deleteFavMovieFailureAction, deleteFavMovieSuccessAction, getFavMoviesAction, getFavMoviesFailureAction, getFavMoviesSuccessAction, getMoviesAction, getMoviesFailureAction, getMoviesSuccessAction } from './actions';
import{mergeMap, map, catchError, of, tap}from 'rxjs'
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
        ),
        catchError((error)=>of(getMoviesFailureAction({error:error})))
    )
)
getFavMovies$=createEffect(()=>
    this.actions$.pipe(
        ofType(getFavMoviesAction),
        mergeMap(
            ()=> this._movieService.getAllFavMovies()
            .pipe(
                map(favMovies=>(getFavMoviesSuccessAction({favMovies:favMovies})))
            )
        ),
        catchError((error)=>of(getFavMoviesFailureAction({error:error})))
    )
)
addFavMovie$ = createEffect(()=>
    this.actions$.pipe(
        ofType(addFavMovieAction),
        mergeMap(
            (action)=> this._movieService.addFavMovie(action.favMovie)
            .pipe(
                map(()=>addFavMovieSuccessAction())
            )
        ),
        catchError((error)=>of(addFavMovieFailureAction({error:error})))
    )
)

deleteFavMovie$ = createEffect(()=>
this.actions$.pipe(
    ofType(deleteFavMovieAction),
    mergeMap(
        (action)=> this._movieService.deleteFavMovie(action.id).pipe(
            map(()=>deleteFavMovieSuccessAction())
        )
    ),
    catchError((error)=>of(deleteFavMovieFailureAction({error:error})))
))




    constructor(
        private _movieService:MovieService,
        private actions$:Actions
        ){}
}