import { IFavMovieState } from "src/app/home/types/favMovieState.interface";
import { IMovieState } from "../home/types/movieState.interface";

export interface IAppState {
    movies:IMovieState,
    favMovies:IFavMovieState
}
