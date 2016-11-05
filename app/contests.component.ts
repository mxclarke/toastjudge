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
          {{contest.getContestType()}}
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

  // Checkbox callback
  toggleContest(contest:Contest, isChecked: boolean) {
  console.log("Checkbox callback, ischecked  " + isChecked);
    if ( isChecked ) {
      this.contestService.addSelected(contest.id);
    } else {
      this.contestService.removeSelected(contest.id);
    }
  }

  // List selection handler
  onSelect(contest: Contest): void {
  console.log("SELECTED " + contest.getContestType());
    this.selectedContest = contest;
  }

  isChecked(contest: Contest): boolean {
  console.log("is checked " + contest.getContestType());
    return this.selectedContests.some(elem =>
      elem.getContestType() === contest.getContestType());
  }
}
