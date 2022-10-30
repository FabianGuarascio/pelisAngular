import { createReducer, on } from "@ngrx/store";
import { IFavMovieState } from "src/app/home/types/favMovieState.interface";
import { IResult } from "../types/movieResponse.interface";
import { IMovieState } from "../types/movieState.interface";
import { 
    addDummyData,
    addFavMovieAction,
    addFavMovieFailureAction,
    addFavMovieSuccessAction,
    deleteFavMovieAction,
    deleteFavMovieFailureAction,
    deleteFavMovieSuccessAction,
    getFavMoviesAction,
    getFavMoviesFailureAction,
    getFavMoviesSuccessAction,
    getMoviesAction,
    getMoviesSuccessAction,
    removeMoviesSuccessAction
    } from "./actions";

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

const favInitialState:IFavMovieState={
    isLoading:false,
    hasLoaded:false,
    favMovies:[],
    deleteId:"",
    error:null
}
export const favMovieReducer=createReducer(
    favInitialState,
    on(getFavMoviesAction,(state)=>({
        ...state,
        isLoading:true
    })),
    on(getFavMoviesSuccessAction,(state,{favMovies})=>({
        ...state,
        isLoading:false,
        hasLoaded:true,
        favMovies:favMovies
    })),
    on(getFavMoviesFailureAction,(state,{error})=>({
        ...state,
        isLoading:false,
        error:error
    })),
    on(addFavMovieAction,(state,{favMovie})=>({
        ...state,
        isLoading:true,
        currentFavMovie:favMovie
    })),
    on(addFavMovieSuccessAction,(state,result)=>({
        ...state,
        favMovies:[...state.favMovies,state.currentFavMovie!],
        isLoading:false,
        hasLoaded:true,
        currentFavMovie:undefined
    })),
    on(addFavMovieFailureAction,(state,{error})=>({
        ...state,
        isLoading:false,
        currentFavMovie:undefined,
        error:error
    })),
    on(deleteFavMovieAction,(state,{id})=>({
        ...state,
        isLoading:true,
        deleteId:id
    })),
    on(deleteFavMovieSuccessAction,(state)=>({
        ...state,
        isLoading:false,
        favMovies: state.favMovies.filter(favMovie=> favMovie._id!==state.deleteId),
        deleteId:""
    })),
    on(deleteFavMovieFailureAction,(state,{error})=>({
        ...state,
        isLoading:false,
        deleteId:"",
        error:error
    }))
)
