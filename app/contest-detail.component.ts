import { Component, Input } from '@angular/core';

import { Contest } from './contest';
import { CategoriedContest } from './categoried-contest';
import { UncategoriedContest } from './uncategoried-contest';

@Component({
  moduleId: module.id,
  selector: 'contest',
  templateUrl: 'contest-detail.component.html'
})
export class ContestDetailComponent {
  @Input()
  contest: Contest;

  isCategoried(contest: Contest): boolean {
    // Note: if you need to get the classname:
    //    contest.constructor.name
    return contest instanceof CategoriedContest;
  }
}
