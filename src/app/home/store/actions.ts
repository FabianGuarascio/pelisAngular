import { createAction, props } from "@ngrx/store";
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
    '[Home Page] Get Movies failure'
)