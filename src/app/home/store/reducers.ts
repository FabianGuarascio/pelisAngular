import { createReducer, on } from "@ngrx/store";
import { IResult } from "../types/movieResponse.interface";
import { IMovieState } from "../types/movieState.interface";
import { addDummyData, getMoviesAction, getMoviesSuccessAction, removeMoviesSuccessAction } from "./actions";

export const initialState:IMovieState={
    isLoading:false,
    hasLoaded:false,
    results:[],
    error:null
}
const dummyData:IResult= { 
    adult: false,
    backdrop_path: "sssdf",
    genre_ids: [1,2],
    id: 1,
    original_language: "string",
    original_title: "string",
    overview: "string",
    popularity: 1,
    poster_path: "string",
    release_date: "string",
    title: "string",
    video: false,
    vote_average: 1,
    vote_count: 1}
export const movieReducer=createReducer(
    initialState,
    on(getMoviesAction,(state)=>({
        ...state,
        isLoading:true
    })),
    on(getMoviesSuccessAction,(state,{results})=>({
        ...state,
        isLoading:false,
        hasLoaded:true,
        results:results
    })),
    on(removeMoviesSuccessAction,(state)=>({
        ...state,
        results:state.results.slice(0,-19)
    })),
    on(addDummyData,(state)=>({
        ...state,
        results: state.results.concat(dummyData)
    }))
)