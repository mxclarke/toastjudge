import { Injectable } from '@angular/core';

import { Contestant } from './contestant';

@Injectable()
export class ContestantService {
  private contestants: Contestant[] = []; // later will get from http

  getContestants(): Promise<Contestant[]> {
    return Promise.resolve(this.contestants);
  }

  // Create and add a new contestant.
  // This doesn't need to retun a Promise as it is storing contestants
  // locally, but we will get it to do so in case that ever changes.
  create(name: string): Promise<Contestant> {
    let contestant = new Contestant(name);
    console.log("about to return promise in service");
    return Promise.resolve(contestant);
  }
}
