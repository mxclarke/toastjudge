// Directive for determining a contestant's scores, and total score, for
// a single contest.

import { Component, Input } from '@angular/core';

import { Contestant } from './contestant';
import { Contest } from './contest';
import { CategoriedContest } from './categoried-contest';
import { Category } from './category';
import { JudgingItem } from './judging-item';
import { PartialScore } from './partial-score';

import { ScoringService } from './scoring.service';

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

  totalScore: number;

  constructor(private scoringService: ScoringService) {}

  getCategories(): Category[] {
    if ( this.contest.contestData.categories === undefined ) {
      console.log("scores.component: not a categoried contest");
      return [];
    } else {
      console.log("scores.component: a categoried contest");
      return this.contest.contestData.categories;
    }
  }

  onResultChanged(result: number, judgingItem: JudgingItem) {
    // Update the partial score and get the new total (for this contestant).
    let partialScore:PartialScore = new PartialScore(judgingItem, result, true);
    // TODO finalise/lock feature not yet implemented
    // let partialScore:PartialScore = new PartialScore(judgingItem, result, false);

    this.totalScore = this.scoringService.updatePartialScore(partialScore,
        this.contestant.id, this.contest.id);
  }
}
