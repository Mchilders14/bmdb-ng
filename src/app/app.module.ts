import { HttpClientModule } from '@angular/common/http'; // imported separately
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // imported separately
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './feature/movie/movie-list/movie-list.component'; // imported separately
import { ActorListComponent } from './feature/actor/actor-list/actor-list.component'; // imported separately
import { CreditListComponent } from './feature/credit/credit-list/credit-list.component'; // imported separately

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    ActorListComponent,
    CreditListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
