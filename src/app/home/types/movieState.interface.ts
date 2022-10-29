import { IResult } from "./movieResponse.interface"

export interface IMovieState{
    isLoading:boolean,
    hasLoaded:boolean
    results:IResult[],
    error:string|null
}