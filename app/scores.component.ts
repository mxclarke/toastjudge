// Directive for determining a contestant's scores, and total score, for
// a single contest.

import { Component, Input } from '@angular/core';

import { Contestant } from './contestant';
import { Contest } from './contest';
import { CategoriedContest } from './categoried-contest';
import { Category } from './category';

@Component({
  moduleId: module.id,
  selector: 'scores',
  templateUrl: 'scores.component.html',
  styleUrls: ['scores.component.css']
})
export class ScoresComponent {
  @Input()
  contestant: Contestant;
  @Input()
  contest: Contest;

  hasCategories(): boolean {
    return this.contest.contestData instanceof CategoriedContest;
  }

  getCategories(): Category[] {
    if ( this.contest.contestData instanceof CategoriedContest ) {
      return this.contest.contestData.categories;
    } else {
      return [];
    }
  }
}
