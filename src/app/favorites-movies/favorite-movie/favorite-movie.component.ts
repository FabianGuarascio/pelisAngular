import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MovieService } from 'src/app/home/services/movie.service';
import { deleteFavMovieAction } from 'src/app/home/store/actions';
import { IAppState } from 'src/app/types/app-state';

@Component({
  selector: 'app-favorite-movie',
  templateUrl: './favorite-movie.component.html',
  styleUrls: ['./favorite-movie.component.scss']
})
export class FavoriteMovieComponent implements OnInit {
  @Input()favoriteMovie?:any
  
  constructor(private movieService:MovieService,private store:Store<IAppState>) { }

  ngOnInit(): void {
  }
  borrar(id:string){
    // console.log(this.fav._id)
    // this.movieService.deleteFavMovie(this.fav._id).subscribe()
    this.store.dispatch(deleteFavMovieAction({id}))
    
  }
}
