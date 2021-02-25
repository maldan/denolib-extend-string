import { assertEquals } from "https://deno.land/std@0.85.0/testing/asserts.ts";
import { EString, StringExtend } from "../src/StringExtend.ts";

Deno.test("transofrm capitalize", () => {
    assertEquals(EString("a").transofrm.capitalize(), "A");
    assertEquals(EString("").transofrm.capitalize(), "");
    assertEquals(EString("hi").transofrm.capitalize(), "Hi");
    assertEquals(EString("HAH").transofrm.capitalize(), "HAH");

    console.log(EString("HeLo").transofrm.caseStyle("camel", "kebab"));
});

Deno.test("transofrm case style camel -> any", () => {
    assertEquals(EString("helloWorld").transofrm.caseStyle("camel", "kebab"), "hello-world");
    assertEquals(EString("helloWorld").transofrm.caseStyle("camel", "dot"), "hello.world");
});

Deno.test("transofrm time to int", () => {
    assertEquals(EString("00:30").transofrm.timeToInt("mm:ss"), 30);
    assertEquals(EString("01:30").transofrm.timeToInt("mm:ss"), 90);

    assertEquals(EString("00:01").transofrm.timeToInt("hh:mm"), 60);
    assertEquals(EString("00:02").transofrm.timeToInt("hh:mm"), 120);
    assertEquals(EString("01:00").transofrm.timeToInt("hh:mm"), 60 * 60);
    assertEquals(EString("01:01").transofrm.timeToInt("hh:mm"), 60 * 60 + 60);

    assertEquals(EString("00:00:00").transofrm.timeToInt("hh:mm:ss"), 0);
    assertEquals(EString("00:00:10").transofrm.timeToInt("hh:mm:ss"), 10);
    assertEquals(EString("01:00:00").transofrm.timeToInt("hh:mm:ss"), 60 * 60);
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
