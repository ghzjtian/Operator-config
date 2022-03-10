import { Operator } from "./operator.model";

export class GreaterThan extends Operator {

  check(currentValue: number): boolean {
    return currentValue > this.value;
  }
}
