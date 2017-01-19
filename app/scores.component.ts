// Directive for determining a contestant's scores, and total score, for
// a single contest.

import { Component, OnInit, Input } from '@angular/core';

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
export class ScoresComponent implements OnInit {
  @Input()
  contestant: Contestant;
  @Input()
  contest: Contest;

  totalScore: number;

  constructor(private scoringService: ScoringService) {}

  ngOnInit() {
    // The component might be being re-initialised, in which case there
    // were previous values to all the sliders and the total result. We
    // don't want to lose these, so they have been stored in the scoring
    // service. While the sliders are updated via getResult(), the total
    // also needs to be updated.
    this.totalScore = this.scoringService.getTotalScore(this.contest.id,
      this.contestant.id);
    console.log("scores.component calcd totalScore as " + this.totalScore);
  }

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
    let partialScore: PartialScore = new PartialScore(judgingItem, result, true);
    // TODO finalise/lock feature not yet implemented
    // let partialScore:PartialScore = new PartialScore(judgingItem, result, false);

    this.totalScore = this.scoringService.updatePartialScore(partialScore,
        this.contest.id, this.contestant.id);
  }

  // Retrieves the result, if any, for this component's contest and contestant
  // for the given judging item. This is so the slider's can be re-initialised
  // with the results so far if the judge happens to click around the app
  // and cause a component refresh. If the result is null that means there
  // are no results so far. In that case zero is returned, since all results
  // start at zero.
  private getResult(judgingItem: JudgingItem): number {
    let partialScore: PartialScore = this.scoringService.getPartialScore(
      this.contest.id, this.contestant.id, judgingItem
    );

    return (partialScore) ? partialScore.result : 0;
  }
}
