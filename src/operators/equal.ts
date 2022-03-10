import { Operator } from "./operator.model";

export class Equal extends Operator {
  check(currentValue: number): boolean {
    return currentValue == this.value;
  }
}
