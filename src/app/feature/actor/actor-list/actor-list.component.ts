import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/model/actor.class';
import { ActorService } from 'src/app/service/actor.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {

  actors: Actor[] = [];

  constructor(private actorSvc: ActorService) { }

  ngOnInit(): void {
    this.actorSvc.list().subscribe(
      res => {
                this.actors = res as Actor[]; 
                console.log("List of Actors: ", this.actors); 
              },
      err => { 
                console.log(err); 
              }
      );
  }

}
