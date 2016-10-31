import { Injectable } from '@angular/core';

import { Contest } from './contest';
import { ContestData } from './contest-data';
import { CATEGORIED } from './default-contests';
import { UNCATEGORIED } from './default-contests';



@Injectable()
export class ContestService {
  contestsSelected: Contest[] = [];

  // Returns a list of all possible contests.
  getContests(): Promise<Contest[]> {
    // At the moment we're just fetching from our server-side JSON, but
    // this could change in the future to fetch from a remote service,
    // so the return type of this method should still be a Promise object.
    let contests: Contest[] = [];

    // Combine the two array types.
    let contestData: ContestData[]
        = (<ContestData[]>UNCATEGORIED).concat(CATEGORIED);
    // Use the contest data to create a list of contests.
    contestData.forEach(
      elem => {
        contests.push(new Contest(elem));
      }
    );

    return Promise.resolve(contests);
  }

  // Returns a list of all the contests that the user (judge) has selected
  // to judge.
  getSelected(): Promise<Contest[]> {
    return Promise.resolve(this.contestsSelected);
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
