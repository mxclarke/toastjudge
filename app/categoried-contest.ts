import { Contest } from './contest';
import { Category } from './category';

export class CategoriedContest implements Contest {
  contestType: string;
  categories: Category[];
}
