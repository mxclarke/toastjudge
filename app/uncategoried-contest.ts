import { Contest } from './contest';
import { JudgingItem } from './judging-item';

export class UncategoriedContest implements Contest {
  readonly contestType: string;
  readonly judgingItems: JudgingItem[];

  constructor(contestType: string, judgingItems: JudgingItem[]) {
    this.contestType = contestType;
    this.judgingItems = judgingItems;
  }
}
