import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { movieReducer } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from './store/effects';

const routes=[
  {
  path:"",
  component:HomeComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('movies',movieReducer),
    EffectsModule.forFeature([MovieEffects])
  ]
})
export class HomeModule { }
