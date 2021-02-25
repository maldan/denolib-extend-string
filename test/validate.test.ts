import { assertEquals } from "https://deno.land/std@0.85.0/testing/asserts.ts";
import { EString, StringExtend } from "../src/StringExtend.ts";

Deno.test("validate email", () => {
    const correct = ["a@a.ru", "text@com.ua.ru", "hi@hi.com"];
    const inCorrect = ["sdfsdf", "", "23234", "dd@", "@dd.ru"];

    correct.forEach((x) => {
        assertEquals(EString(x).validate.email(), true);
    });
    inCorrect.forEach((x) => {
        assertEquals(EString(x).validate.email(), false);
    });
});

/*Deno.test("capitalize", () => {
    assertEquals(new StringExtend("hello").capitalize, "Hello");
});

Deno.test("digits", () => {
    assertEquals(new StringExtend("x123dac").digits, 123);
});

Deno.test("validate email", () => {
    assertEquals(new StringExtend("dd@dd.ru").isValidEmail, true);
    assertEquals(new StringExtend("ddxdd.ru").isValidEmail, false);
});

Deno.test("replace at", () => {
    assertEquals(new StringExtend("1234").replaceAt(1, "5"), "1534");
});

Deno.test("snake to camel", () => {
    assertEquals(new StringExtend("open_file").snakeToCamel, "openFile");
});

Deno.test("kebab to camel", () => {
    assertEquals(new StringExtend("open-file").kebabToCamel, "openFile");
});

Deno.test("dot to camel", () => {
    assertEquals(new StringExtend("file.open.error").dotToCamel, "fileOpenError");
});

Deno.test("camel to kebab", () => {
    assertEquals(new StringExtend("openFile").camelToKebab, "open-file");
    assertEquals(new StringExtend("open").camelToKebab, "open");
});

Deno.test("camel to dot", () => {
    assertEquals(new StringExtend("openFile").camelToDot, "open.file");
    assertEquals(new StringExtend("open").camelToDot, "open");
});*/
