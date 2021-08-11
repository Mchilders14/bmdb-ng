import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actor } from 'src/app/model/actor.class';
import { Credit } from 'src/app/model/credit.class';
import { Movie } from 'src/app/model/movie.class';
import { ActorService } from 'src/app/service/actor.service';
import { CreditService } from 'src/app/service/credit.service';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-credit-edit',
  templateUrl: './credit-edit.component.html',
  styleUrls: ['./credit-edit.component.css']
})
export class CreditEditComponent implements OnInit {

  title: string = "Credit-Edit";
  credit: Credit = new Credit();
  actors: Actor[] = [];
  movies: Movie[] = [];
  submitBtnTitle: string = 'Edit';
  creditId: number = 0;
  
  constructor(
    private creditSvc: CreditService,
    private movieSvc: MovieService,
    private actorSvc: ActorService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {

    // get the credit to edit
    this.route.params.subscribe(parms => this.creditId = parms["id"]);
    this.creditSvc.get(this.creditId).subscribe(
      resp => {
        this.credit = resp as Credit;
      },
      err => { console.log(err); }
    );

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

    // populate movie
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
    this.creditSvc.edit(this.credit).subscribe(
      res => {
        this.credit = res as Credit;
        this.router.navigateByUrl("/credit-list");
      },
      err => { console.log(err); }
    );
  }

  compActor(a: Actor, b: Actor): boolean {
    return a && b && a.id === b.id;
  }

  compMovie(a: Movie, b: Movie): boolean {
    return a && b && a.id === b.id;
  }
}
