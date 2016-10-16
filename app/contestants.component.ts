import { Component, OnInit } from '@angular/core';

import { Contestant } from './contestant';
import { ContestantService } from './contestant.service';

@Component({
  moduleId: module.id,
  selector: 'contestants',
  templateUrl: 'contestants.component.html'
})
export class ContestantsComponent implements OnInit {
  contestants: Contestant[];

  constructor(private contestantService: ContestantService) {}

  ngOnInit(): void {
  console.log("on init contestants");
    this.contestantService.getContestants()
    .then(contestants => this.contestants = contestants);
  }

  add(name: string): void {
    console.log("adding " + name);
    name = name.trim();
    if ( !name )  // check for nothing entered
      return;

    this.contestantService.create(name)
    .subscribe(
      contestant => this.contestants.push(contestant),
      error => this.handleError(<any>error)
      //   error =>  this.errorMessage = <any>error TODO
    );
    // Same thing using return of PRomise
    //.toPromise() // from Observable to Promise, needs import
    //.then(contestant => this.contestants.push(contestant))
    //.catch(this.handleError);
  }

  private handleError(error: any): void {
    // TODO real error handling
    console.error('An error occurred', error); // for demo purposes only
  }
}
