// Service to update partial scores for contestants, and to calculate
// total scores.
// In any contest, a contestant is judged according to a number of criteria,
// which are called "judging items". Each judge (i.e. the user) assigns a mark
// for each judging item for each contestant, and the software sums those
// partial scores to provide the contestant's total marks according to that
// judge.
// Note that the scores are stored in memory. Our service methods should
// really make use of promises/futures, in the event that we save to a
// database (TODO).
import { Injectable } from '@angular/core';

import { PartialScore } from './partial-score';

class ContestScores {
  // A map of contestant IDs to PartialScores, i.e. partial results for a
  // single contest for a single contestant. The contestant ID is simply the
  // contestant's name, but this is irrelevant as far as this service is
  // concerned.
  scoresMap: Map<number, PartialScore[]>
    = new Map<number, PartialScore[]>();

  updatePartialScore(partialScore: PartialScore, contestantId: number): PartialScore[] {
    let scores:PartialScore[] = null;

    // Find or create the contestant ref in our scoresMap.
    if ( this.scoresMap.has(contestantId) ) {
      scores = this.scoresMap.get(contestantId);
      // Search to see if that judging item already exists.
      let idx = scores.findIndex(elem => elem.judgingItem.name === partialScore.judgingItem.name);
      if ( idx < 0 ) {
        // Was not found, has to be added.
        scores.push(partialScore);
      } else {
        // Has to be updated.
        scores[idx].result = partialScore.result;
        scores[idx].finalised = partialScore.finalised;
      }
    } else {
      // Insert a new contestant with partialScore as its first score.
      scores = [partialScore];
      this.scoresMap.set(contestantId, scores);
    }

    return scores;
  }
}

@Injectable()
export class ScoringService {

  // A map of contest IDs to all the contestant scores for that contest.
  private scoresMap: Map<number, ContestScores>
    = new Map<number,ContestScores>();

  // Updates the partial score (for a single judging item) for the given
  // contestant competing in the given contest, which must be a selected contest.
  // Returns the updated total score if all partial scores for that contestant
  // in that contest have been finalised, otherwise zero.
  updatePartialScore(partialScore: PartialScore,
      contestantId: number, contestId: number): number {

      // Find or create the contest ref in our scoresMap.
      let contestScores: ContestScores = null;
      if ( this.scoresMap.has(contestId) ) {
        contestScores = this.scoresMap.get(contestId);
      } else {
        contestScores = new ContestScores();
        this.scoresMap.set(contestId, contestScores);
      }

      // Update the contest for that contestant, obtaining the contestant's
      // partial scores so far.
      let scores: PartialScore[] = contestScores.updatePartialScore(partialScore, contestantId);

      // Return the contestant's total score, if valid, for the contest.
      return this.calculateTotalScore(scores);
  }

  private calculateTotalScore(partialScores: PartialScore[]): number {
    let totalScore: number = 0;

    // Can't use foreach, because we need to break out as soon as we find
    // one that isn't finalised. Obviously, don't use for-in, because
    // that should only be used for iterating over objects with string keys.
    for ( let score of partialScores ) {
      if ( !score.finalised ) {
        return 0;
      }
      totalScore += score.result;
    }

    return totalScore;
  }
}
