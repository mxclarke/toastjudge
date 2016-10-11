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

  constructor(private contestService: ContestService) {}

  ngOnInit(): void {
    this.initContests();
  }

  initContests(): void {
    this.contestService.getContests()
      .then(contests => this.contests = contests);
  }

  toggleContest(contest:Contest, isChecked: boolean) {
    if ( isChecked ) {
      this.contestService.addSelected(contest);
    } else {
      this.contestService.removeSelected(contest);
      }
    }
  }
}
