import { Component, OnInit } from '@angular/core';

import { Contest } from './contest';
import { ContestService } from './contest.service';

@Component({
    moduleId: module.id,
    selector: 'setup',
    template: `
      <ul>
        <li *ngFor="let contest of contests" (click)="onSelect(contest)">
          <input type="checkbox" name="isActive"
            (change)="toggleContest(contest, $event.target.checked)"
            (click)="$event.stopPropagation()"
            [checked]="isChecked(contest)"
          >
          {{contest.contestType}}
        </li>
      </ul>
      <contest [contest]="selectedContest"></contest>
    `
})
export class ContestsComponent implements OnInit {
  contests: Contest[];
  selectedContests: Contest[];
  selectedContest: Contest;

  constructor(private contestService: ContestService) {}

  ngOnInit(): void {
    this.initContests();
  }

  initContests(): void {
    console.log("init ContestsComponent");
    this.contestService.getContests()
      .then(contests => this.contests = contests);
    this.contestService.getSelected()
      .then(contests => this.selectedContests = contests);
  }

  toggleContest(contest:Contest, isChecked: boolean) {
    if ( isChecked ) {
      this.contestService.addSelected(contest);
    } else {
      this.contestService.removeSelected(contest);
    }
  }

  onSelect(contest: Contest): void {
  console.log("SELECTED " + contest.contestType);
    this.selectedContest = contest;
  }

  isChecked(contest: Contest): boolean {
  console.log("is checked " + contest.contestType);
    return this.selectedContests.some(elem => elem.contestType === contest.contestType);
  }
}
