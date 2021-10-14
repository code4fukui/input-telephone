import { TelephoneValidator } from "./TelephoneValidator.js";
import { InputWithValidator } from "https://code4fukui.github.io/input-number/InputWithValidator.js";

class InputTelephone extends InputWithValidator {
  constructor() {
    super(new TelephoneValidator());
  }
}

customElements.define("input-telephone", InputTelephone);

export { InputTelephone };
