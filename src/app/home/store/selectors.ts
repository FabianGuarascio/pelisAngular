import { createSelector } from "@ngrx/store";
import { IAppState } from "src/app/types/app-state";

export const selectFeature=(state:IAppState)=>state.movies

export const getMoviesLoadingSelector=createSelector(
    selectFeature,(state)=>state.isLoading
)
export const getMoviesSuccessSelector=createSelector(
    selectFeature,(state)=>state.results
)
export const getMoviesErrorSelector=createSelector(
    selectFeature,(state)=>state.error
)