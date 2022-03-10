import { PhoneFactory } from "./phone-factory";

const phoneFactory = new PhoneFactory();
const miPhone = phoneFactory.makePhone("miPhone");
miPhone.make();
const iPhone = phoneFactory.makePhone("iPhone");
iPhone.make();