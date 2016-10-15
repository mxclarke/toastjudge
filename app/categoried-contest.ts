import { Contest } from './contest';
import { Category } from './category';

export class CategoriedContest implements Contest {
  contestType: string;
  categories: Category[];

  constructor(contestType: string, categories: Category[]) {
    this.contestType = contestType;
    this.categories = categories;
  }
}
