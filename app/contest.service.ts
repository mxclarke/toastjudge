import { Injectable } from '@angular/core';

import { Contest } from './contest';
import { ContestData } from './contest-data';
import { Contestant } from './contestant';
import { ContestantService } from './contestant.service';

import { CATEGORIED } from './default-contests';
import { UNCATEGORIED } from './default-contests';

@Injectable()
export class ContestService {
  allContests: Contest[] = [];
  contestsSelected: Contest[] = [];
  currentContest: Contest;
  private idTracker: number = 0;

  constructor(readonly contestantService: ContestantService) {
    this.init();
  }
  private init() : void {
    // Combine the two array types.
    let contestData: ContestData[]
        = (<ContestData[]>UNCATEGORIED).concat(CATEGORIED);
    // Use the contest data to create a list of contests.
    contestData.forEach(
      elem => {
        let nextId = this.generateNextId();
        this.allContests.push(new Contest(nextId, elem));
      }
    );
  }
  private generateNextId(): number {
    return ++this.idTracker;
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

  // Adds the given contest to the list of selected, unless it was already
  // in the list.
  addSelected(contestId: number): void {
    // Check that the contest isn't already in the list, as a defensive
    // measure (it shouldn't be).
    let idx: number = this.getSelectedIndex(contestId);
    if ( idx < 0 ) {
      // Check that a contest with this ID even exists. If so, add it.
      let contest = this.getContest(contestId);
      if ( contest != null ) {
        this.contestsSelected.push(contest);
      } else {
        // TODO log it
      }
    }
  }

  // Removes the given contest from the list of selected.
  removeSelected(contestId: number): void {
    let idx : number = this.getSelectedIndex(contestId);
    if ( idx > -1 ) {
      this.contestsSelected.splice(idx, 1); // remove 1 item
    }
  }

  // Adds the given contestant to the given contest.
  addContestant(contestantId: number, contestId: number): void {
    let contest = this.getContest(contestId);
    if ( contest != null ) {
      this.contestantService.getContestant(contestantId)
      .subscribe(
        contestant => contest.addContestant(contestant),
        error => this.handleError(<any>error)
        //   error =>  this.errorMessage = <any>error TODO
      );
    }
  }

  // Removes the given contestant from the given contest.
  removeContestant(contestantId: number, contestId: number): void {
    let contest = this.getContest(contestId);
    if ( contest != null ) {
      this.contestantService.getContestant(contestantId)
      .subscribe(
        contestant => contest.removeContestant(contestant),
        error => this.handleError(<any>error)
        //   error =>  this.errorMessage = <any>error TODO
      );
    }
  }

  getCurrent(): Contest {
    return this.currentContest;
  }

  setCurrent(contestId: number): void {
    let contest = this.getContest(contestId);
    if ( contest != null ) {
      this.currentContest = contest;
    }
  }

  // Get the contest with the given id, or null if it does not exist.
  private getContest(contestId: number): Contest {
    return this.allContests.find(elem => elem.id === contestId);
  }

  // Get the index of the contest with the given id in the list of selected
  // contests, or -1 if it does not exist.
  private getSelectedIndex(contestId: number) : number {
    return this.contestsSelected.findIndex(elem =>
      elem.id === contestId
    );
  }

  private handleError(error: any): void {
    // TODO log it properly
    console.error('An error occurred', error); // for demo purposes only
  }
}
