import { Component, OnInit } from '@angular/core';

import { Contest } from './contest';
import { ContestService } from './contest.service';

@Component({
  moduleId: module.id,
  selector: 'judging',
  templateUrl: 'contest-judging.component.html'
})
export class ContestJudgingComponent implements OnInit {
  // note: html the selected attribute goes on the one that is selected
  private contests: Contest[];
  private selectedContest: Contest;

  constructor(private contestService: ContestService) {}

  // To save state between routed components (class is reconstructed & ngOnInit
  // called each time) is to save it to a service and then reconstruct the whole
  // thing on init. This makes sense as the selected contests could have changed
  // in the meantime.
  ngOnInit(): void {
    this.contestService.getSelected()
    .then(contests => this.contests = contests)
    .then(contests => {
        // Set the previous current contest, if any, and if it exists in the
        // selected list.
        let currentContest: Contest = this.contestService.getCurrent();
        if ( currentContest != null && contests.indexOf(currentContest) > -1 ) {
          this.selectedContest = currentContest;
        }

        // If there wasn't any but the list isn't empty, set it to the first.
        if ( this.selectedContest === undefined && this.contests.length > 0) {
          this.selectedContest = this.contests[0];
          // Don't bother telling the service, as you'll get the same thing
          // next time if no change.
        }
      });
  }

  onChangeContest(contest: Contest): void {
    this.selectedContest = contest;
    this.contestService.setCurrent(contest);
  }

}
