import { Equal } from "./equal";
import { GreaterThan } from "./greater-than";
import { GreaterThanOrEqual } from "./greater-than-or-equal";
import { LessThan } from "./less-than";
import { LessThanOrEqual } from "./less-than-or-equal";
import { NotEqual } from "./not-equal";
import { OperatorConfig } from "./operator-config.interface";
import { Operator } from "./operator.model";

export class operatorFactory {

  makeOperator(operatorConfig: OperatorConfig): Operator {
    const errorMessage = `This symbol(${operatorConfig.operatorSymbol}) not match any operator!`;
    switch (operatorConfig.operatorSymbol.toLowerCase().trim()) {
      case ">":
        return new GreaterThan(operatorConfig);
      case ">=":
        return new GreaterThanOrEqual(operatorConfig);

      case "<":
        return new LessThan(operatorConfig);
      case "<=":
        return new LessThanOrEqual(operatorConfig);
    
      case "=":
        return new Equal(operatorConfig);
      case "!=":
        return new NotEqual(operatorConfig);
    
      default:
        console.error(errorMessage);
        throw new Error(errorMessage);
        break;
    }
  }

  convert(operatorConfigs: OperatorConfig[]): Operator[] {
    return operatorConfigs.map(operator => this.makeOperator(operator));
  }
}