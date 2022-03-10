import { Phone } from "./phone";

export class MiPhone implements Phone {
  MiPhone() {
    this.make();
  }
  make() {
    console.log("make xiaomi phone!");
  }
}
