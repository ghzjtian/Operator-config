import { Iphone } from "./iphone";
import { MiPhone } from "./mi-phone";
import { Phone } from "./phone";

export class PhoneFactory {
  makePhone(phoneType: string): Phone {
    switch (phoneType.toLowerCase()) {
      case "miphone":
        return new MiPhone();
    
      case "iphone":
        return new Iphone();
    
      default:
        break;
    }
  } 
}