import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import { Observable }  from 'rxjs/Observable';

import { Contest } from './contest';
import { ContestData } from './contest-data';
import { UncategoriedContest } from './uncategoried-contest';
import { CategoriedContest } from './categoried-contest';
import { Contestant } from './contestant';
import { ContestantService } from './contestant.service';

//import { CATEGORIED } from './default-contests';
//import { UNCATEGORIED } from './default-contests';

@Injectable()
export class ContestService {

  allContests: Contest[] = [];
  contestsSelected: Contest[] = [];
  currentContest: Contest;
  private idTracker: number = 0;

  constructor(readonly contestantService: ContestantService,
      private http:Http) {
      // TODO change this to ngOnInit
    this.init();
  }

  private init() : void {
    // Http.get() returns an Observable<Response>. There are also post(), put(),
    // delete(), patch(), head() and request() methods.
      this.http.get('data/default-contests.json')
      .map(results => results.json())
//      .map(body => body.data || {})
      .map(data => this.extractData(data))
      .catch(this.handleError)
      .subscribe(contests => {
        // Don't assign directly, because you want to retain the original
        // object reference that is being observed, because that is what
        // client components are listening on.
        Object.assign(this.allContests, contests);
      });
  }

  private extractData(data:any): Contest[] {

        let uncategoried:UncategoriedContest[]
          = <UncategoriedContest[]>data.uncategoried;
        let categoried:CategoriedContest[]
          = <CategoriedContest[]>data.categoried;
        let contestData: ContestData[]
            = (<ContestData[]>uncategoried).concat(categoried);

        let results:Contest[] = [];
        // Use the contest data to create a list of contests.
        contestData.forEach(
          elem => {
            let nextId = this.generateNextId();
            results.push(new Contest(nextId, elem));
          }
        );
        console.log("contest.service contestsFromJson returning len " + results.length);
        return results;
  }

  private generateNextId(): number {
    return ++this.idTracker;
  }

  // Returns an Observable of all the available contests. The contest data is
  // being loaded remotely (or from a JSON file for the purposes of this demo),
  // therefore the contests will be uninitialised on immediate startup.
  // Therefore, client components need to be able to listen for when the data
  // is ready, so they can update their views accordingly.
  getContests(): Observable<Contest[]> {
    return Observable.of(this.allContests);
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
      let contest:Contest = this.getContest(contestId);
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

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
        errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg, error);
    return Observable.throw(errMsg);
  }

}
