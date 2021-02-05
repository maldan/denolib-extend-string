declare global {
  interface String {
    /**
         * Convert string with date to date object
         */
    toDate(): Date;

    /**
         * Extract from string all digits
         */
    digits(): number;

    /**
         * Replace char at specific position
         * @param index
         * @param replacement
         */
    replaceAt(index: number, replacement: string): string;

    /**
         * Convert dmy date to ymd
         * @constructor
         */
    DMYToYMD(): string;

    /**
         * Convert ymd to dmy
         * @constructor
         */
    YMDToDMY(): string;

    /**
         * Convert hours:minutes to int. For example "00:59" -> 59 and "01:01" -> 61.
         * @constructor
         */
    HMToInt(): number;

    /**
         * Convert time to human readable time, for example 22:30 -> 22 h 30 min
         */
    humanTime(): string;

    /**
         * Get string between two string. For example "My name is <John> Watson".between("<", ">") will be "John".
         * @param first
         * @param last
         */
    between(first: string, last: string): string;

    /**
         * Get amount of specific char in string. For example "hello".count("l") will be 2.
         * @param char
         */
    count(char: string): number;

    /**
         * Convert snake to camel. Example sex_rock to sexRock
         */
    snakeToCamel(): string;

    /**
         * Convert kebab to camel. Example sex-rock to sexRock
         */
    kebabToCamel(): string;

    /**
         * Convert camel to kebab. Example sexRock to sex-rock
         */
    camelToKebab(): string;

    /**
         * Convert dot to camel. Example sex.rock to sexRock
         */
    dotToCamel(): string;

    capitalize(): string;

    /**
         * Calculate max match length. For example "hello".maxCharsMatch("hell") will be 4.
         * Because "hello" contains a word "hell". If we call "hello".maxCharsMatch("123") we will
         * get 0 because there is no "123" in "hello" word.
         * @param str
         */
    maxCharsMatch(str: string): number;

    htmlSpecialChars(): string;

    dataUrlToBuffer(): string;

    validateEmail(): boolean;

    //leftPad(len: number, ch?: string): string;
  }
}

String.prototype.toDate = function (): Date {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  let date = this;
  let d;
  if (date.indexOf(" ") !== -1) {
    date = date.replace(" ", "T");
  }
  if (date.indexOf("T") !== -1) {
    d = new Date(date);
  }

  if (isNaN(d.getTime())) {
    return null;
  }

  /*let t = date.split('-');
    if (t.length === 1) t = date.split('.');

    if (t[2] * 1 > 1000)
        d = new Date(Date.UTC(t[2] * 1, t[1] * 1 - 1, t[0] * 1));
    else
        d = new Date(Date.UTC(t[0] * 1, t[1] * 1 - 1, t[2] * 1));

    d.setHours(0, 0, 0, 0);*/
  return d;
};

String.prototype.digits = function () {
  return this.replace(/\D/g, "") * 1;
};

String.prototype.replaceAt = function (index: number, replacement: string) {
  return this.substr(0, index) + replacement +
    this.substr(index + replacement.length);
};

String.prototype.DMYToYMD = function (): string {
  const date = this.split(" ")[0];
  const time = this.split(" ").length > 1 ? (" " + this.split(" ")[1]) : "";
  const tuple = date.split(".");
  return tuple[2] + "-" + tuple[1] + "-" + tuple[0] + time;
};

String.prototype.YMDToDMY = function (): string {
  const date = this.split(" ")[0];
  const time = this.split(" ").length > 1 ? (" " + this.split(" ")[1]) : "";
  const tuple = date.split("-");
  return tuple[2] + "." + tuple[1] + "." + tuple[0] + time;
};

String.prototype.HMToInt = function () {
  let hms = this + ":00";
  let a = hms.split(":");
  // if (a.length === 1) return 0;
  return (~~a[0]) * 60 * 60 + (~~a[1]) * 60 + (~~a[2]);
};

String.prototype.humanTime = function () {
  let tuple = this.split(":");
  tuple[0] = ~~tuple[0];
  tuple[1] = ~~tuple[1];
  if (tuple.length === 3) tuple[2] = ~~tuple[2];

  if (tuple.length === 3) {
    return `${tuple[0]} h ${tuple[1]} min ${tuple[2]} sec`;
  }
  if (tuple.length === 2) return `${tuple[0]} h ${tuple[1]} min`;
};

String.prototype.between = function (first: string, last: string) {
  let f1 = this.indexOf(first), f2 = this.indexOf(last);
  if (f1 === -1 || f2 === -1) return this;
  if (first === last) {
    f2 = this.indexOf(last, 1);
  }
  return this.substr(f1 + first.length, f2 - f1 - last.length);
};

String.prototype.count = function (char: string) {
  let out = 0;
  for (let i = 0; i < this.length; i++) {
    if (this[i] === char) out += 1;
  }
  return out;
};

String.prototype.snakeToCamel = function () {
  return this.replace(/(_\w)/g, (x) => x[1].toUpperCase());
};

String.prototype.kebabToCamel = function () {
  return this.replace(/(-\w)/g, (x) => x[1].toUpperCase());
};

String.prototype.camelToKebab = function () {
  return this.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
};

String.prototype.dotToCamel = function () {
  return this.replace(/(\.\w)/g, (x) => x[1].toUpperCase());
};

String.prototype.maxCharsMatch = function (str: string): number {
  for (let i = 0; i < str.length; i++) {
    let part = str.slice(0, -i) || str;
    if (this.match(part)) return part.length;
  }
  return 0;
};

String.prototype.htmlSpecialChars = function (): string {
  return this.replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
};

String.prototype.validateEmail = function (): boolean {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(this.toLowerCase());
};

String.prototype.capitalize = function (): string {
  return this[0].toUpperCase() + this.slice(1);
};

/*String.prototype.leftPad = function (len: number, ch: string = ' '): string {
    let str = String(this);
    var i = -1;

    len = len - str.length;
    while (++i < len) {
        str = ch + str;
    }
    return str;
}*/

export default class StringExtender {
}
