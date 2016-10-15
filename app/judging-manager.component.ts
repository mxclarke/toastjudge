import { Component, Input } from '@angular/core';

import { JudgingItem } from './judging-item';

@Component({
  moduleId: module.id,
  selector: 'judging-items-manager',
  templateUrl: 'judging-manager.component.html'
})
export class JudgingManagerComponent {
  @Input()
  judgingItems: JudgingItem[];
}
