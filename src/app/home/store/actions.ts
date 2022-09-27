import { createAction, props } from "@ngrx/store";
import { IResult } from "../types/movieResponse.interface";

export const getBooksAction=createAction(
    '[Home Page] Get Books'
)
export const getBookSuccessAction=createAction(
    '[Home Page] Get Books success',
    props<{results:IResult[]}>()
)
export const getBookFailureAction=createAction(
    '[Home Page] Get Books failure'
)