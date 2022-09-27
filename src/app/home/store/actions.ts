import { createAction, props } from "@ngrx/store";
import { IResult } from "../types/movieResponse.interface";

export const getBooks=createAction(
    '[Home Page] Get Books'
)
export const getBookSuccess=createAction(
    '[Home Page] Get Books success',
    props<{results:IResult[]}>()
)
export const getBookFailure=createAction(
    '[Home Page] Get Books failure'
)