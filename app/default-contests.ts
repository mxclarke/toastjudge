import { Contest } from './contest';
import { UncategoriedContest } from './uncategoried-contest';
import { CategoriedContest } from './categoried-contest';

export const UNCATEGORIED: UncategoriedContest[] = [
{contestType: 'Evaluation',
 judgingItems: [
  {name: 'Analytical Quality', description: 'Clear, focused',
   maxExcellent: 40, maxVeryGood: 39, maxGood: 27, maxFair: 16
  }
 ]}
];

export const CATEGORIED: CategoriedContest[] = [
  {contestType: 'Table topics',
   categories: []
  },
  {contestType: 'Humorous',
   categories: []
  },
  {contestType: 'International',
   categories: []
  },
];
