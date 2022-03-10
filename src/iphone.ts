import { Phone } from "./phone";

export class Iphone implements Phone {
  Iphone() {
    this.make();
  }
  make() {
    console.log("make iphone");
  }
}