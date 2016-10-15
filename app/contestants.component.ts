import { Component } from '@angular/core';

import { Contestant } from './contestant';

@Component({
  moduleId: module.id,
  selector: 'contestants',
  templateUrl: 'contestants.component.html'
})
export class ContestantsComponent {
  contestants: Contestant[] = [];
}
