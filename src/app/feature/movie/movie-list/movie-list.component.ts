import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.class';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private movieSvc: MovieService) { }

  ngOnInit(): void {
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

}
