// A widget to allow a judge to set a partial score for a contestant.

import { Component, Input, OnInit } from '@angular/core';

import { JudgingItem } from './judging-item';

@Component({
  moduleId: module.id,
  selector: 'judging-item-score',
  templateUrl: 'judging-item-score.component.html',
  styleUrls: ['judging-item-score.component.css']
})
export class JudgingItemScoreComponent implements OnInit {
  @Input()
  judgingItem: JudgingItem;

  result: number;
  resultBand: string;

  // One issue is that I would like to make the following four as contestants
  // (in this class, so as to keep presentation matters outside of JudingItem).
  // However, the input judgingItem is not available during construction,
  // while ngOnInit() is too late to assign values to "readonly" constants.
  // For now, I've removed the "readonly" qualifier, but I'd like to find a
  // clean way of handling this: TODO
  // private readonly fairText: string;
  private fairText: string;
  private goodText: string;
  private veryGoodText: string;
  private excellentText: string;

  ngOnInit(): void {
    this.fairText = "Fair (0 - " + this.judgingItem.maxFair + ")";
    this.goodText = "Good (" + (this.judgingItem.maxFair+1) + " - " +
      this.judgingItem.maxGood + ")";
    this.veryGoodText = "Very Good (" + (this.judgingItem.maxGood+1) + " - " +
        this.judgingItem.maxVeryGood + ")";
    this.excellentText = "Excellent";
  }

  onChangeSlider(val: number): void {
    if ( val <= this.judgingItem.maxFair )
      this.resultBand = this.fairText;
    else if ( val <= this.judgingItem.maxGood )
      this.resultBand = this.goodText;
    else if ( val <= this.judgingItem.maxVeryGood )
      this.resultBand = this.veryGoodText;
    else this.resultBand = this.excellentText;
  }
}