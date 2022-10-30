import { IFavMovie } from "./favMovies.interface"

export interface IFavMovieState{
    isLoading:boolean,
    hasLoaded:boolean,
    favMovies:IFavMovie[],
    currentFavMovie?:IFavMovie,
    deleteId:string
    error:string|null
}
