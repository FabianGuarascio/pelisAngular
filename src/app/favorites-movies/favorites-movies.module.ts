import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { FavoriteMovieComponent } from './favorite-movie/favorite-movie.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from '../home/store/effects';
import { favMovieReducer } from '../home/store/reducers';

const routes=[
  {
  path:"favorites",
  component:FavoritesPageComponent
  }
]

@NgModule({
  declarations: [
    FavoritesPageComponent,
    FavoriteMovieComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('favMovies',favMovieReducer),
    EffectsModule.forFeature([MovieEffects])

  ]
})
export class FavoritesMoviesModule { }
