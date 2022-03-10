import { OperatorConfig } from "./operators/operator-config.interface";

export interface Config {
  leftPower: OperatorConfig[],
  rightPower: OperatorConfig[],
}
