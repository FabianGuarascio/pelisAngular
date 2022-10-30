import { createAction, props } from "@ngrx/store";
import { IFavMovie } from "../types/favMovies.interface";
import { IResult } from "../types/movieResponse.interface";

export const getMoviesAction=createAction(
    '[Home Page] Get Movies'
)
export const getMoviesSuccessAction=createAction(
    '[Home Page] Get Movies success',
    props<{results:IResult[]}>()
)
export const removeMoviesSuccessAction=createAction(
    '[Home Page] Removes last movie success'
)
export const addDummyData=createAction(
    '[Home Page] add dummy movie success'
)
export const getMoviesFailureAction=createAction(
    '[Home Page] Get Movies failure',
    props<{error:string}>()
)

export const getFavMoviesAction=createAction(
    '[Fav Page] Get Fav Movies'
)
export const getFavMoviesSuccessAction=createAction(
    '[Fav Api] Get Fav Movies Success',
    props<{favMovies:IFavMovie[]}>()
)
export const getFavMoviesFailureAction=createAction(
    '[Fav Api] Get Fav Movies failure',
    props<{error:string}>()
)

export const addFavMovieAction=createAction(
    '[Fav Page] Add Fav Movie',
    props<{favMovie:IFavMovie}>()
)

export const addFavMovieSuccessAction=createAction(
    '[Fav Api] Add Fav Movie Success',
)

export const addFavMovieFailureAction=createAction(
    '[Fav Page] Add Fav Movie Failure',
    props<{error:string}>()
)

export const deleteFavMovieAction=createAction(
    '[Fav Page] Remove Fav Movie',
    props<{id:string}>()
)
export const deleteFavMovieSuccessAction=createAction(
    '[Fav Page] Remove Fav Movie Success'
)

export const deleteFavMovieFailureAction=createAction(
    '[Fav Page] Remove Fav Movie Failure',
    props<{error:string}>()
)



