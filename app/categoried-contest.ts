// Provides categories for a categoried contest, where each category
// provides judging items.

import { ContestData } from './contest-data';
import { Category } from './category';

export class CategoriedContest implements ContestData {
  readonly contestType: string;
  readonly categories: Category[];

  constructor(contestType: string, categories: Category[]) {
    this.contestType = contestType;
    this.categories = categories;
  }
}
