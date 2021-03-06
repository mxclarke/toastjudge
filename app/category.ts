import { JudgingItem } from './judging-item';

export class Category {
  readonly name: string;
  readonly judgingItems: JudgingItem[];

  constructor(name: string, judgingItems: JudgingItem[]) {
    this.name = name;
    this.judgingItems = judgingItems;
  }
}
