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
          >
          {{contest.contestType}}
        </li>
      </ul>
      <contest [contest]="selectedContest"></contest>
    `
})
export class ContestsComponent implements OnInit {
  contests: Contest[];
  selectedContest: Contest;

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

  onSelect(contest: Contest): void {
  console.log("SELECTED " + contest.contestType);
    this.selectedContest = contest;
  }
}
