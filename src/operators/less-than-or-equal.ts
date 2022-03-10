import { Operator } from "./operator.model";

export class LessThanOrEqual extends Operator {
  check(currentValue: number): boolean {
    return currentValue <= this.value;
  }
}
