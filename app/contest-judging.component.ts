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

  constructor(private contestService: ContestService) {console.log("ctor");}

// IT CALLS INIT (and the ctor) EVERY SINGLE TIME. only way to save
// state between routed components is to save it to a service and then
// reconstruct the whole thing on init!! This makes sense as the selected
// contests could have changed in the meantime.
  ngOnInit(): void {
    console.log("init ContestJudging");
    console.log(" ... init ... selectedContest = " + this.selectedContest);
    this.contestService.getSelected()
    .then(contests => this.contests = contests)
    .then(contests => {
        if ( this.selectedContest === undefined && this.contests.length > 0) {
          this.selectedContest = this.contests[0];
          console.log("inited selectedcontest is " + this.selectedContest.getContestType());
        }
      //  console.log("inited selectedcontest is " + this.selectedContest.getContestType());
      });
  }

  onChangeContest3(val: any): void {
    console.log("3Changed to " + val);
  //  this.logit(val);
    let contest:Contest = val as Contest;
    console.log("    Cast to " + contest.getContestType());
    //let contest = this.getContest(contestType);
    this.selectedContest = contest;
  }


  onChangeContest2(contest: Contest): void {
    console.log("2Changed to " + contest);
    //let contest = this.getContest(contestType);
    this.selectedContest = contest;
  }

  onChangeContest(contestType: string): void {
    console.log("Changed to " + contestType);
    let contest:Contest = this.getContest(contestType);
    this.selectedContest = contest;
  }

  // Returns a Contest of the given contestType.
  private getContest(contestType: string): Contest {
    return this.contests.find(function(elem) {
      return elem.getContestType() === contestType;
    });
    //return this.contestants.some(elem => elem.name === name);
  }

}
