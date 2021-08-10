import { HttpClientModule } from '@angular/common/http'; // imported separately
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // imported separately
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './feature/movie/movie-list/movie-list.component'; // imported separately
import { ActorListComponent } from './feature/actor/actor-list/actor-list.component'; // imported separately
import { CreditListComponent } from './feature/credit/credit-list/credit-list.component';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { MovieCollectionListComponent } from './feature/movieCollection/movie-collection-list/movie-collection-list.component';
import { MenuComponent } from './core/menu/menu.component';
import { MovieCreateComponent } from './feature/movie/movie-create/movie-create.component';
import { MovieEditComponent } from './feature/movie/movie-edit/movie-edit.component';
import { MovieDetailComponent } from './feature/movie/movie-detail/movie-detail.component'; // imported separately

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    ActorListComponent,
    CreditListComponent,
    UserListComponent,
    MovieCollectionListComponent,
    MenuComponent,
    MovieCreateComponent,
    MovieEditComponent,
    MovieDetailComponent
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
