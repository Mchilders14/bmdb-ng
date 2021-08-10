import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actor } from 'src/app/model/actor.class';
import { Credit } from 'src/app/model/credit.class';
import { Movie } from 'src/app/model/movie.class';
import { ActorService } from 'src/app/service/actor.service';
import { CreditService } from 'src/app/service/credit.service';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-credit-create',
  templateUrl: './credit-create.component.html',
  styleUrls: ['./credit-create.component.css']
})
export class CreditCreateComponent implements OnInit {

  title: string = "Credit-Create";
  credit: Credit = new Credit();
  actors: Actor[] = [];
  movies: Movie[] = [];
  submitBtnTitle: string = 'Create';

  constructor(
    private creditSvc: CreditService,
    private movieSvc: MovieService,
    private actorSvc: ActorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // populate list of actors
    this.actorSvc.list().subscribe(
      res => {
                this.actors = res as Actor[]; 
                console.log("List of Actors: ", this.actors); 
              },
      err => { 
                console.log(err); 
              }
      );

    this.movieSvc.list().subscribe(
      res => {
                this.movies = res as Movie[]; 
                console.log("List of Movies: ", this.movies); 
              },
      err => { 
                console.log(err); 
              }
    );
  }

  save() {
    this.creditSvc.create(this.credit).subscribe(
      res => {
        this.credit = res as Credit;
        this.router.navigateByUrl("/credit-list");
      },
      err => { console.log(err); }
    );
  }
}
