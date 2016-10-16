import { Component, OnInit } from '@angular/core';

import { Contestant } from './contestant';
import { ContestantService } from './contestant.service';

@Component({
  moduleId: module.id,
  selector: 'contestants',
  templateUrl: 'contestants.component.html'
})
export class ContestantsComponent implements OnInit {
  contestants: Contestant[];

  constructor(private contestantService: ContestantService) {}

  ngOnInit(): void {
  console.log("on init contestants");
    this.contestantService.getContestants()
    .then(contestants => this.contestants = contestants);
  }

  add(name: string): void {
    console.log("adding " + name);
    name = name.trim();
    if ( !name )
      return;
    this.contestantService.create(name)
    .then(contestant => this.contestants.push(contestant));
  }
}
