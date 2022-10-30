import { createSelector } from "@ngrx/store";
import { IAppState } from "src/app/types/app-state";

export const selectFeature=(state:IAppState)=>state.movies
export const selectFavMoviesState=(state:IAppState)=>state.favMovies

export const getMoviesLoadingSelector=createSelector(
    selectFeature,(state)=>state.isLoading
)
export const getMoviesSuccessSelector=createSelector(
    selectFeature,(state)=>state.results
)
export const getMoviesHasLoadedSelector=createSelector(
    selectFeature,(state)=>state.hasLoaded
)
export const getMoviesErrorSelector=createSelector(
    selectFeature,(state)=>state.error
)

export const favMoviesLoadingSelector=createSelector(
    selectFavMoviesState,(state)=>state.isLoading
)
export const favMoviesHasLoadedSelector=createSelector(
    selectFavMoviesState,(state)=>state.hasLoaded
)
export const favMoviesSelector=createSelector(
    selectFavMoviesState,(state)=>state.favMovies
)
export const favMoviesErrorSelector=createSelector(
    selectFavMoviesState,(state)=>state.error
)

