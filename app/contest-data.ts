import { Category } from './category';

export interface ContestData {
  readonly contestType: string;
  readonly categories?: Category[];
}
