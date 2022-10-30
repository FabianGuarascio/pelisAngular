import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { addFavMovieAction, getFavMoviesAction } from 'src/app/home/store/actions';
import { favMoviesSelector } from 'src/app/home/store/selectors';
import { IAppState } from 'src/app/types/app-state';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss']
})
export class FavoritesPageComponent implements OnInit {

  public favMovies$ = this.store.pipe(select(favMoviesSelector))

  constructor(private store:Store<IAppState>) { }

  ngOnInit(): void {
    this.store.dispatch(getFavMoviesAction())
  }

  addToFav(){
    let img= "https://image.tmdb.org/t/p/w200/g8sclIV4gj1TZqUpnL82hKOTK3B.jpg"
    this.store.dispatch(addFavMovieAction({favMovie:{title:"pinocho",img:img}}))
  }

}
