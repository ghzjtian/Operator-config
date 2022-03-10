import { Config } from "./config";
import { operatorFactory } from "./operators/operator-factory";
import { OperatorConfig } from "./operators/operator-config.interface";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const config: Config = require("../config.json");
console.log(config);


const leftPower = 201;
const leftPowerConfigs: OperatorConfig[] = config.leftPower;
const leftPowerOperators = (new operatorFactory()).convert(leftPowerConfigs);
const leftPowerResult = leftPowerOperators.every(operator => operator.check(leftPower));
console.log("leftPowerResult:",leftPowerResult);

const rightPower = 1;
const rightPowerConfigs: OperatorConfig[] = config.rightPower;
const rightPowerOperators = (new operatorFactory()).convert(rightPowerConfigs);
const rightPowerResult = rightPowerOperators.every(operator => operator.check(rightPower));
console.log("rightPowerResult:",rightPowerResult);

