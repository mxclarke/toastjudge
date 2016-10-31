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
      new Category('Content', [
        new JudgingItem('Speech development', 'Structure, organisation, support material',
         15, 14, 11, 9),
        new JudgingItem('Effectiveness', 'Achievement of purpose, interest, reception',
         10, 9, 7, 5),
         new JudgingItem('Speech value', 'Ideas, logic, original thought',
           15, 14, 11, 9),
          new JudgingItem('Audience response', 'Attentiveness, laughter, interest, reception',
           15, 14, 11, 9)
      ]),
      new Category('Delivery', [
        new JudgingItem('Physical', 'Appearance, body language, speaking area',
          10, 9, 7, 5),
        new JudgingItem('Voice', 'Flexibility, volume',
          10, 9, 7, 5),
        new JudgingItem('Manner', 'Directness, assurance, enthusiasm',
          10, 9, 7, 5)
      ]),
      new Category('Language', [
        new JudgingItem('Appropriateness', 'to speech purpose and audience',
          10, 9, 7, 5),
        new JudgingItem('Correctness', 'Grammar, pronunciation, word selection',
          5, 4, 3, 2)
      ])
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
