import { Operator } from "./operator.model";

export class NotEqual extends Operator {
  check(currentValue: number): boolean {
    return currentValue != this.value;
  }
}
