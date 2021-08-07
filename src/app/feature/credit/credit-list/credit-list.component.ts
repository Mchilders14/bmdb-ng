import { Component, OnInit } from '@angular/core';
import { Credit } from 'src/app/model/credit.class';
import { CreditService } from 'src/app/service/credit.service';

@Component({
  selector: 'app-credit-list',
  templateUrl: './credit-list.component.html',
  styleUrls: ['./credit-list.component.css']
})
export class CreditListComponent implements OnInit {

  credits: Credit[] = [];

  constructor(private creditSvc: CreditService) { }

  ngOnInit(): void {
    this.creditSvc.list().subscribe(
      res => {
                this.credits = res as Credit[]; 
                console.log("List of Credits: ", this.credits); 
              },
      err => { 
                console.log(err); 
              }
      );
  }
}
