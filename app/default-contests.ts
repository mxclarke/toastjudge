import { Contest } from './contest';
import { UncategoriedContest } from './uncategoried-contest';
import { CategoriedContest } from './categoried-contest';
import { Category } from './category';
import { JudgingItem } from './judging-item';

export const UNCATEGORIED: UncategoriedContest[] = [
  new UncategoriedContest( 'Evaluation',
    [
      new JudgingItem('Analytical Quality', 'Clear, focused',
       40, 39, 27, 16)
    ]
  )
];

export const CATEGORIED: CategoriedContest[] = [
  new CategoriedContest('Table topics',
    [
      new Category('Content', []),
      new Category('Delivery', []),
      new Category('Language', [])
    ]
  ),
  new CategoriedContest('Humorous',
    [
      new Category('Content', []),
      new Category('Delivery', []),
      new Category('Language', [])
    ]
  ),
  new CategoriedContest('International',
    [
      new Category('Content',
        [
          new JudgingItem('Speech development', 'Structure, organisation, support material',
           20, 19, 13, 8),
          new JudgingItem('Effectiveness', 'Achievement of purpose, interest, reception',
           15, 14, 10, 5)
        ]
      ),
      new Category('Delivery', []),
      new Category('Language', [])
    ]
  )
];
