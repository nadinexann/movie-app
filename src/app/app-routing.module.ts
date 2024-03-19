import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailPageComponent } from './components/movie-detail-page/movie-detail-page.component';
import { PeopleComponent } from './components/people/people.component';
import { PeopleDetailPageComponent } from './components/people-detail-page/people-detail-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies/:id', component: MovieDetailPageComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'people/:id', component: PeopleDetailPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
