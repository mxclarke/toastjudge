import { Contest } from './contest';
import { UncategoriedContest } from './uncategoried-contest';
import { CategoriedContest } from './categoried-contest';
import { Category } from './category';
import { JudgingItem } from './judging-item';

export const UNCATEGORIED: UncategoriedContest[] = [
  new UncategoriedContest( 'Evaluation',
    [
      new JudgingItem('Analytical Quality', 'Clear, focused',
       40, 39, 27, 16
    ]
  )
];

export const CATEGORIED: CategoriedContest[] = [
  new CategoriedContest('Table topics', []),
  new CategoriedContest('Humorous', []),
  new CategoriedContest('International', [])
];
