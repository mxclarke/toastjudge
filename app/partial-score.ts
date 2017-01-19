// Result for a judging item for a contestant in a contest.
import { JudgingItem } from './judging-item';

export class PartialScore {
  readonly judgingItem: JudgingItem;
  result: number = 0;
  // Whether the judge feels that this is a fair score for the item. A total
  // will not be calculated until all partial scores are finalised, to
  // prevent the judge from accidentally overlooking a judging item.
  finalised: boolean;

  constructor(judgingItem: JudgingItem, result: number, finalised: boolean) {
    this.judgingItem = judgingItem;
    this.result = result;
    this.finalised = finalised;
  }
}
