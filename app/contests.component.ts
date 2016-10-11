import { Component, OnInit } from '@angular/core';

import { Contest } from './contest';
import { ContestService } from './contest.service';

@Component({
    moduleId: module.id,
    selector: 'contests',
    template: `
      <ul>
        <li *ngFor="let contest of contests">
          <input type="checkbox" name="isActive" (change)="toggleContest(contest, $event.target.checked)">
          {{contest.contestType}}
        </li>
      </ul>
    `
})
export class ContestsComponent implements OnInit {
  contests: Contest[];
  contestsSelected: Contest[] = [];

  constructor(private contestService: ContestService) {}

  ngOnInit(): void {
    this.initContests();
  }

  initContests(): void {
    this.contestService.getContests()
      .then(contests => this.contests = contests);
  }

  toggleContest(contest:Contest, isChecked: boolean) {
  console.log("Selection of " + contest.contestType);
  console.log(" len is " + this.contestsSelected.length);
    var idx = -1;
    if ( isChecked ) {
      this.contestsSelected.push(contest);
    } else {
      idx = this.contestsSelected.indexOf(contest);
      if ( idx > -1 ) {
        this.contestsSelected.splice(idx, 1); // remove 1 item
      }
    }
    console.log(" finished len is " + this.contestsSelected.length);
  }
}
