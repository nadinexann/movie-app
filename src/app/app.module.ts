import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailPageComponent } from './components/movie-detail-page/movie-detail-page.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { PeopleComponent } from './components/people/people.component';
import { PeopleDetailPageComponent } from './components/people-detail-page/people-detail-page.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { CardComponent } from './components/shared/card/card/card.component';
import { TitleComponent } from './components/shared/title/title/title.component';
import { GreetComponent } from './components/shared/greet/greet/greet.component';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailComponent,
    MovieDetailPageComponent,
    HomeComponent,
    PeopleComponent,
    PeopleDetailPageComponent,
    NavigationComponent,
    CardComponent,
    TitleComponent,
    GreetComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    TagModule,
    ButtonModule,
    PaginatorModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
