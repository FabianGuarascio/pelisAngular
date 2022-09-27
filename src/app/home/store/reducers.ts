import { createReducer, on } from "@ngrx/store";
import { IMovieState } from "../types/movieState.interface";
import { getMoviesAction, getMoviesSuccessAction } from "./actions";

export const initialState:IMovieState={
    isLoading:false,
    results:[],
    error:null
}

export const movieReducer=createReducer(
    initialState,
    on(getMoviesAction,(state)=>({
        ...state,
        isLoading:true
    })),
    on(getMoviesSuccessAction,(state,{results})=>({
        ...state,
        isLoading:false,
        results:results
    }))
)