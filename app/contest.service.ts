import { Injectable } from '@angular/core';

import { Contest } from './contest';
import { CONTESTS } from './default-contests';

@Injectable()
export class ContestService {
  getContests(): Promise<Contest[]> {
    return Promise.resolve(CONTESTS);
  }
}
