import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { IndexTheatreComponent } from './theatre/index-theatre/index-theatre.component';
import { CreateTheatreComponent } from './theatre/create-theatre/create-theatre.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';
import { EditTheatreComponent } from './theatre/edit-theatre/edit-theatre.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },

  { path: 'movies/create', component: CreateMovieComponent },
  { path: 'movies/edit/:id', component: EditMovieComponent },

  { path: 'genres', component: IndexGenresComponent },
  { path: 'genres/create', component: CreateGenreComponent },
  { path: 'genres/edit/:id', component: EditGenreComponent },

  { path: 'actors', component: IndexActorsComponent },
  { path: 'actors/create', component: CreateActorComponent },
  { path: 'actors/edit/:id', component: EditActorComponent },

  { path: 'theatres', component: IndexTheatreComponent },
  { path: 'theatres/create', component: CreateTheatreComponent },
  { path: 'theatres/edit/:id', component: EditTheatreComponent },

  // catch all route
  { path: '**', redirectTo: '' },
];
