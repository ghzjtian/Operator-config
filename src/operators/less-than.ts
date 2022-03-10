import { Operator } from "./operator.model";

export class LessThan extends Operator {
  check(currentValue: number): boolean {
    return currentValue < this.value;
  }
}
