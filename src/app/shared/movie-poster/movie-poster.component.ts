import { Component, OnInit, Input } from '@angular/core';
import { IResult } from 'src/app/home/types/movieResponse.interface';

@Component({
  selector: 'app-movie-poster',
  templateUrl: './movie-poster.component.html',
  styleUrls: ['./movie-poster.component.scss']
})
export class MoviePosterComponent implements OnInit {
  @Input() movie?:IResult | null

  constructor() { }

  ngOnInit(): void {
    console.log(this.movie)
  }

}
