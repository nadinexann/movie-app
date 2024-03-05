import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailPageComponent } from './components/movie-detail-page/movie-detail-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies/:id', component: MovieDetailPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
