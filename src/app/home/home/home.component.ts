import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IAppState } from 'src/app/types/app-state';
import { MovieService } from '../services/movie.service';
import { getMoviesAction } from '../store/actions';
import { getMoviesLoadingSelector, getMoviesSuccessSelector } from '../store/selectors';
import { IResult } from '../types/movieResponse.interface';
import {Observable} from 'rxjs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
public isLoading$= this.store.pipe(select(getMoviesLoadingSelector))
public movies$:Observable<IResult[]>= this.store.pipe(select(getMoviesSuccessSelector))
  
  constructor(private store:Store<IAppState>) {
    this.store.dispatch(getMoviesAction())
    }

  ngOnInit(): void {

  }

}
