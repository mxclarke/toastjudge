import { Injectable } from '@angular/core';

import { Contest } from './contest';
import { ContestData } from './contest-data';
import { Contestant } from './contestant';

import { CATEGORIED } from './default-contests';
import { UNCATEGORIED } from './default-contests';

@Injectable()
export class ContestService {
  allContests: Contest[] = [];
  contestsSelected: Contest[] = [];
  currentContest: Contest;

  constructor() {
    this.init();
  }
  private init() : void {
    // Combine the two array types.
    let contestData: ContestData[]
        = (<ContestData[]>UNCATEGORIED).concat(CATEGORIED);
    // Use the contest data to create a list of contests.
    contestData.forEach(
      elem => {
        this.allContests.push(new Contest(elem));
      }
    );
  }

  // Returns a list of all possible contests.
  getContests(): Promise<Contest[]> {
    // At the moment we're just fetching from our server-side JSON, but
    // this could change in the future to fetch from a remote service,
    // so the return type of this method should still be a Promise object.

    return Promise.resolve(this.allContests);
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
    let idx: number = this.getSelectedIndex(contest);
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
    let idx : number = this.getSelectedIndex(contest);
    if ( idx > -1 ) {
      this.contestsSelected.splice(idx, 1); // remove 1 item
      return true;
    } else {
      return false;
    }
  }

  // Adds the given contestant to the given contest. Returns true if the
  // contestant was added.
  addContestant(contestant: Contestant, contest: Contest): boolean {
    // This could be done without accessing the service -- however, we
    // might want to change the internals at a later date.
    return contest.addContestant(contestant);
  }

  // Removes the given contestant from the given contest. Returns true if
  // the contestant was removed.
  removeContestant(contestant: Contestant, contest: Contest): boolean {
    // This could be done without accessing the service -- however, we
    // might want to change the internals at a later date.
    return contest.removeContestant(contestant);
  }

  getCurrent(): Contest {
    return this.currentContest;
  }

  setCurrent(contest: Contest): void {
    this.currentContest = contest;
  }

  // Since Javascript only checks references for equality, using indexof on
  // a list will not find the appropriate element if it has been recreated,
  // as often occurs with routing.
  private getSelectedIndex(contest: Contest) : number {
    return this.contestsSelected.findIndex(elem =>
      elem.getContestType() === contest.getContestType()
    );
  }
}
