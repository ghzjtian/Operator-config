import { Config } from "./config";
import { OperatorFactory } from "./operators/operator-factory";
import { OperatorConfig } from "./operators/operator-config.interface";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const config: Config = require("../config.json");
console.log(JSON.stringify(config, null, 2));

const checkValueIsMatch = (configLogicOrs: OperatorConfig[][]) => {
  const operatorFactory =new OperatorFactory();
  const result = configLogicOrs.some(powerConfigLogicAnds => {
    const operators = operatorFactory.convert(powerConfigLogicAnds);
    return operators.every(operator => operator.check(leftPower));
  });
  return result;
}

const leftPower = 450;
const leftPowerConfigLogicOrs: OperatorConfig[][] = config.leftPower;
const leftPowerResult = checkValueIsMatch(leftPowerConfigLogicOrs);
console.log("leftPowerResult:",leftPowerResult);
