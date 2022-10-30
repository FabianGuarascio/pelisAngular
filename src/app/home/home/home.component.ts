import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IAppState } from 'src/app/types/app-state';
import { MovieService } from '../services/movie.service';
import { getMoviesAction, removeMoviesSuccessAction } from '../store/actions';
import { getMoviesHasLoadedSelector, getMoviesLoadingSelector, getMoviesSuccessSelector } from '../store/selectors';
import { IResult } from '../types/movieResponse.interface';
import {Observable} from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
public isLoading$= this.store.pipe(select(getMoviesLoadingSelector))
public hasLoaded$= this.store.pipe(select(getMoviesHasLoadedSelector))
public movies$:Observable<IResult[] | undefined>= this.store.pipe(select(getMoviesSuccessSelector))
  
  constructor(private store:Store<IAppState>) {
    this.hasLoaded$.subscribe(res=>{
      if(!res){
        this.store.dispatch(getMoviesAction())
      }
    })
  }

  ngOnInit(): void {
  }
  borrar(){
    this.store.dispatch(removeMoviesSuccessAction())
  }
}
