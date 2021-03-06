import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actor } from 'src/app/model/actor.class';
import { ActorService } from 'src/app/service/actor.service';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})
export class ActorDetailComponent implements OnInit {

  title: string = "Actor-Detail";
  actor: Actor = new Actor();
  actorId: number = 0;

  constructor(  // Injecting Services
    private actorSvc: ActorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(parms => this.actorId = parms["id"]);
    this.actorSvc.get(this.actorId).subscribe(
      res => {
        this.actor = res as Actor;
      },
      err => {
        console.log(err);
      }
    );
  }

  delete() {
    this.actorSvc.delete(this.actorId).subscribe(
      res => {
        this.actor = res as Actor;
        this.router.navigateByUrl("/actor-list")
      },
      err => {
        console.log(err);
      }
    );
  }

}
