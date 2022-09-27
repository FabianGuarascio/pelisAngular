import { IResult } from "./movieResponse.interface"

export interface IMovieState{
    isLoading:boolean
    results:IResult[],
    error:string|null
}