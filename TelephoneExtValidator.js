import { Validator } from "https://code4fukui.github.io/input-number/Validator.js";

const telephone = "0123456789/ ０１２３４５６７８９／　";

class TelephoneExtValidator extends Validator {
  isValid(c) {
    if (c == "") {
      return false;
    }
    return telephone.indexOf(c) >= 0;
  }
  normalize(c) {
    if (c == "") {
      return "";
    }
    const n = telephone.indexOf(c);
    if (n < 0) {
      return "";
    }
    if (n >= telephone.length / 2) {
      return telephone[n - telephone.length / 2];
    }
    return c;
  }
}

export { TelephoneExtValidator };
