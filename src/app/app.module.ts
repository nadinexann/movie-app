import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieDetailPageComponent } from './components/movie-detail-page/movie-detail-page.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [AppComponent, MovieDetailComponent, MovieDetailPageComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
