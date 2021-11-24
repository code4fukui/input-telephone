import { TelephoneExtValidator } from "./TelephoneExtValidator.js";
import { InputWithValidator } from "https://code4fukui.github.io/input-number/InputWithValidator.js";

class InputTelephoneExt extends InputWithValidator {
  constructor(opts) {
    super(new TelephoneExtValidator(), opts);
  }
}

customElements.define("input-telephone-ext", InputTelephoneExt);

export { InputTelephoneExt };
