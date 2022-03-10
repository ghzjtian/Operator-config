import { OperatorConfig } from "./operator-config.interface";

export abstract class Operator {
  value: number;
  operatorSymbol: string;
  
  constructor(operatorConfig: OperatorConfig) {
    this.value = operatorConfig.value;
    this.operatorSymbol = operatorConfig.operatorSymbol;
  }

  abstract check(currentValue: number): boolean;
}
