import { Component, OnInit } from '@angular/core';
import { MovieCollection } from 'src/app/model/movieCollection.class';
import { MovieCollectionService } from 'src/app/service/movie-collection.service';

@Component({
  selector: 'app-movie-collection-list',
  templateUrl: './movie-collection-list.component.html',
  styleUrls: ['./movie-collection-list.component.css']
})
export class MovieCollectionListComponent implements OnInit {

  movieCollections: MovieCollection[] = [];

  constructor(private movieCollectionSvc: MovieCollectionService) { }

  ngOnInit(): void {
    this.movieCollectionSvc.list().subscribe(
      res => {
                this.movieCollections = res as MovieCollection[]; 
                console.log("List of Movies: ", this.movieCollections); 
              },
      err => { 
                console.log(err); 
              }
      );
  }

}
