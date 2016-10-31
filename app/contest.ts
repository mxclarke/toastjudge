// A representation of a single contest.
// A contest has information about how contestants will be judged, and it has
// a list of contestants.
import { ContestData } from './contest-data';
import { Contestant } from './contestant';

export class Contest {
  readonly contestData: ContestData;
  private contestants: Contestant[];

  constructor(contestData: ContestData) {
    this.contestData = contestData;
  }

  getContestType() : string {
    return this.contestData.contestType;
  }

  getContestants() : Contestant[] {
    return this.contestants;
  }

  // Adds the given contestant to the list of selected. Returns false if the
  // contestant was already in the list and therefore not added, otherwise true.
  addContestant(contestant: Contestant) : boolean {
    // Check that the contestant isn't already in the list.
    var idx = -1;
    idx = this.contestants.indexOf(contestant);
    if ( idx < 0 ) {
      this.contestants.push(contestant);
      return true;
    } else {
      return false;
    }
  }

  // Removes the given contestant from the list. Returns true if
  // the contestant was found in the list and therefore removed, otherwise false.
  removeContestant(contestant: Contestant): boolean {
    var idx = -1;
    idx = this.contestants.indexOf(contestant);
    if ( idx > -1 ) {
      this.contestants.splice(idx, 1); // remove 1 item
      return true;
    } else {
      return false;
    }
  }
}
