import { Operator } from "./operator.model";

export class GreaterThanOrEqual extends Operator {

  check(currentValue: number): boolean {
    return currentValue >= this.value;
  }
}
