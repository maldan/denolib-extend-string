import { StringExtend } from "./StringExtend.ts";

export class Validate {
    readonly extend: StringExtend;

    constructor(extend: StringExtend) {
        this.extend = extend;
    }

    email(): boolean {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(this.extend.string.toLowerCase());
    }
}
