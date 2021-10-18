import * as t from "https://deno.land/std/testing/asserts.ts";
import { TelephoneExtValidator } from "./TelephoneExtValidator.js";

Deno.test("isValid", () => {
  const v = new TelephoneExtValidator();
  t.assert(v.isValid("1"));
  t.assert(v.isValid("１"));
  t.assert(!v.isValid("a"));
  t.assert(!v.isValid("_"));
  t.assert(!v.isValid("-"));
  t.assert(!v.isValid("+"));
  t.assert(!v.isValid("$"));
  t.assert(!v.isValid("A"));
  t.assert(!v.isValid("$"));
  t.assert(!v.isValid("あ"));
  t.assert(!v.isValid(""));
});
Deno.test("normalize", () => {
  const v = new TelephoneExtValidator();
  t.assertEquals(v.normalize("1"), "1");
  t.assertEquals(v.normalize("１"), "1");
  t.assertEquals(v.normalize("＋"), "");
  t.assertEquals(v.normalize("A"), "");
  t.assertEquals(v.normalize("あ"), "");
  t.assertEquals(v.normalize(""), "");
});
Deno.test("validate", () => {
  const v = new TelephoneExtValidator();
  t.assertEquals(v.validate("1111"), "1111");
  t.assertEquals(v.validate("111 / 333"), "111 / 333");
  t.assertEquals(v.validate("０あ１.い２３"), "0123");
  t.assertEquals(v.validate("abc_$$def -ghi.kjl"), " ");
  t.assertEquals(v.validate("たたた"), "");
});
