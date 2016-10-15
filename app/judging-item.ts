export class JudgingItem {

  constructor(readonly name:string, readonly description: string,
      readonly maxExcellent: number, readonly maxVeryGood: number,
      readonly maxGood: number, readonly maxFair: number) {

    if ( this.maxExcellent <= this.maxVeryGood ||
         this.maxVeryGood <= this.maxGood ||
         this.maxGood <= this.maxFair ||
         this.maxFair <= 0 ) {
        throw new Error(
          "Invalid JudgingItem data: ${this.maxExcellent}, ${this.maxVeryGood}, ${this.maxGood}, ${this.maxFair}.");
      }
  }
}
