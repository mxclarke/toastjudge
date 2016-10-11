import { Injectable } from '@angular/core';

import { Contest } from './contest';
import { CONTESTS } from './default-contests';

@Injectable()
export class ContestService {
  contestsSelected: Contest[] = [];

  // Returns a list of all possible contests.
  getContests(): Promise<Contest[]> {
    return Promise.resolve(CONTESTS);
  }

  // Returns a list of all the contests that the user (judge) has selected
  // to judge.
  getContestSelected(): Promise<Contest[]> {
    return Promise.resolve(contestsSelected);
  }

  // Adds the given contest to the list of selected. Returns false if the
  // contest was already in the list and therefore not added, otherwise true.
  addSelected(contest: Contest): boolean {
    // Check that the contest isn't already in the list, as a defensive
    // measure (it shouldn't be).
    var idx = -1;
    idx = this.contestsSelected.indexOf(contest);
    if ( idx < 0 ) {
      this.contestsSelected.push(contest);
      return true;
    } else {
      return false;
    }
  }

  // Removes the given contest from the list of selected. Returns true if
  // the contest was found in the list and therefore removed, otherwise false.
  removeSelected(contest: Contest): boolean {
    var idx = -1;
    idx = this.contestsSelected.indexOf(contest);
    if ( idx > -1 ) {
      this.contestsSelected.splice(idx, 1); // remove 1 item
      return true;
    } else {
      return false;
    }
  }
}
