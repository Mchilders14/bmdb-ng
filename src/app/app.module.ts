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
import { MovieDetailComponent } from './feature/movie/movie-detail/movie-detail.component';
import { ActorEditComponent } from './feature/actor/actor-edit/actor-edit.component';
import { ActorDetailComponent } from './feature/actor/actor-detail/actor-detail.component';
import { ActorCreateComponent } from './feature/actor/actor-create/actor-create.component';
import { CreditCreateComponent } from './feature/credit/credit-create/credit-create.component';
import { CreditEditComponent } from './feature/credit/credit-edit/credit-edit.component';
import { CreditDetailComponent } from './feature/credit/credit-detail/credit-detail.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { UserLoginComponent } from './feature/user/user-login/user-login.component'; // imported separately

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
    MovieDetailComponent,
    ActorEditComponent,
    ActorDetailComponent,
    ActorCreateComponent,
    CreditCreateComponent,
    CreditEditComponent,
    CreditDetailComponent,
    UserEditComponent,
    UserCreateComponent,
    UserDetailComponent,
    UserLoginComponent
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
