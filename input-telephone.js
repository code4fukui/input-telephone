import { TelephoneValidator } from "./TelephoneValidator.js";
import { InputWithValidator } from "https://code4fukui.github.io/input-number/InputWithValidator.js";

class InputTelephone extends InputWithValidator {
  constructor(opts) {
    super(new TelephoneValidator(), opts);
  }
}

customElements.define("input-telephone", InputTelephone);

export { InputTelephone };
