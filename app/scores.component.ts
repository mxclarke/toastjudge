// Directive for determining a contestant's scores, and total score, for
// a single contest.

import { Component, Input } from '@angular/core';

import { Contestant } from './contestant';
import { Contest } from './contest';

@Component({
  moduleId: module.id,
  selector: 'scores',
  templateUrl: 'scores.component.html'
})
export class Scores {
  @Input()
  contestant: Contestant;
  @Input()
  contest: Contest;
}
