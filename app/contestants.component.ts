import { Component, OnInit } from '@angular/core';

import { Contestant } from './contestant';
import { Contest } from './contest';
import { ContestantService } from './contestant.service';
import { ContestService } from './contest.service';

@Component({
  moduleId: module.id,
  selector: 'contestants',
  templateUrl: 'contestants.component.html'
})
export class ContestantsComponent implements OnInit {
  contestants: Contestant[];
  contests: Contest[];

  constructor(private contestantService: ContestantService,
    private contestService: ContestService) {
  }

  ngOnInit(): void {
    this.contestantService.getContestants()
    .subscribe(
      contestants => this.contestants = contestants,
      error => this.handleError(<any>error)
    );
    // or if using a Promise return
    // .then(contestants => this.contestants = contestants);

    this.retrieveContests();
  }

  retrieveContests(): void {
    this.contestService.getSelected()
    .then(contests => this.contests = contests);
  }

  add(name: string): void {
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

  // Checkbox callback to add/remove contestants from each contest
  toggleContest(contestant: Contestant, contest: Contest, isChecked: boolean) {
    if ( isChecked ) {
      // Add the contestant to the contest
      this.contestService.addContestant(contestant.id, contest.id);
    } else {
      // Remove the contestant from the contest
      this.contestService.removeContestant(contestant.id, contest.id);
    }
  }

  // Returns true if the contest ought to be selected for the contestant.
  isChecked(contestant: Contestant, contest: Contest): boolean {
    return contest.getContestants().some(elem =>
      elem.name === contestant.name
    );
  }

  private handleError(error: any): void {
    // TODO real error handling
    console.error('An error occurred', error); // for demo purposes only
  }
}
