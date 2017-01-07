// Provides the judging items (score ranges) for an uncategoried contest.
// An uncategoried contest contains only a list of judging items, which
// are not organised into categories.

import { ContestData } from './contest-data';
import { JudgingItem } from './judging-item';
// Runtime type discovery (typeof, instanceof, instance.constructor.name etc)
// not yet implemented, so we need to have an empty array of Category to
// determine difference between this class and a CategoriedContest.
//import { Category } from './category';

export class UncategoriedContest implements ContestData {
  readonly contestType: string;
  readonly judgingItems: JudgingItem[];

  constructor(contestType: string, judgingItems: JudgingItem[]) {
    this.contestType = contestType;
    this.judgingItems = judgingItems;
  }
}
