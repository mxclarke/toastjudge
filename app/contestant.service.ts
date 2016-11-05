import { Injectable } from '@angular/core';
import { Observable }  from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import { Contestant } from './contestant';

@Injectable()
export class ContestantService {
  private idTracker = 0;
  private contestants: Contestant[] = []; // later will get from http

  getContestants(): Observable<Contestant[]> {
    return Observable.of(this.contestants);
    // return Promise.resolve(this.contestants);
  }

  // Create and add a new contestant.
  // This doesn't need to retun a Promise as it is storing contestants
  // locally, but we will get it to do so in case that ever changes.
  create(name: string): Observable<Contestant> {
    if ( this.findByName(name) ) {
      return Observable.throw("Contestant already exists");
    } else {
      let nextId = this.generateNextId();
      let contestant = new Contestant(nextId, name);
      console.log("about to return promise in service");
      return Observable.of(contestant);
    }
  }

  getContestant(contestantId: number): Observable<Contestant> {
    let contestant = this.contestants.find(elem => elem.id === contestantId);
    if ( contestant != null ) {
      return Observable.of(contestant);
    } else {
      return Observable.throw("No such contestant with id " + contestantId);
    }
  }

  private generateNextId(): number {
    return ++this.idTracker;
  }

  // Returns true if there exists a Contestant with the given name.
  private findByName(name: string): boolean {
    return this.contestants.some(elem => elem.name === name);
  }
}
