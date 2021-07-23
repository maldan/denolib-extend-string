# Extend String

[![Custom badge](https://img.shields.io/endpoint?url=https%3A%2F%2Fdeno-visualizer.danopia.net%2Fshields%2Flatest-version%2Fx%2Festring%2Fmod.ts)](https://doc.deno.land/https/deno.land/x/estring/mod.ts)
![Deno test](https://github.com/maldan/denolib-extend-string/workflows/Deno/badge.svg)
[![License](https://img.shields.io/github/license/maldan/denolib-extend-string)](https://github.com/maldan/denolib-bytearray/blob/master/LICENSE)
[![hits](https://hits.deltapapa.io/github/maldan/denolib-extend-string.svg)](https://hits.deltapapa.io)
<a href="https://github.com/maldan/denolib-extend-string/pulse" alt="Activity">
<img src="https://img.shields.io/github/commit-activity/m/maldan/denolib-extend-string" />
</a>
![GitHub Repo stars](https://img.shields.io/github/stars/maldan/denolib-extend-string)

Extend standard js string with this module.

## Full documentation

Go here - https://doc.deno.land/https/deno.land/x/estring/mod.ts

## How to import

```ts
import { EString } from "https://deno.land/x/estring@2.0.0/mod.ts";
```

## Function list

### Transform

-   caseStyle

### Validate

-   email

## Example

```ts
EString("hello").transform.capitalize(); // Hello
EString("hello").validate.email(); // false
EString("dd@dd.ru").validate.email(); // true
```

### Have a question/suggestion/bug report?

Contact me: https://t.me/maldan
