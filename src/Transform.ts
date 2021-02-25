import { StringExtend } from "./StringExtend.ts";

type CaseStyleFrom = "camel" | "kebab" | "pascal" | "snake" | "dot";
type CaseStyleTo = "camel" | "kebab" | "flat" | "upper flat" | "pascal" | "snake" | "dot";

export class Transform {
    readonly extend: StringExtend;

    constructor(extend: StringExtend) {
        this.extend = extend;
    }

    capitalize(): string {
        if (!this.extend.string[0]) {
            return "";
        }
        return this.extend.string[0].toUpperCase() + this.extend.string.slice(1);
    }

    timeToInt(mask: "hh:mm" | "hh:mm:ss" | "mm:ss" = "hh:mm") {
        const s = this.extend.string;
        if (mask === "hh:mm") {
            const hms = s + ":00";
            const a = hms.split(":");
            return ~~a[0] * 60 * 60 + ~~a[1] * 60 + ~~a[2];
        }
        if (mask === "hh:mm:ss") {
            const a = s.split(":");
            return ~~a[0] * 60 * 60 + ~~a[1] * 60 + ~~a[2];
        }
        if (mask === "mm:ss") {
            const a = s.split(":");
            return ~~a[0] * 60 + ~~a[1];
        }
        throw new Error(`Unsupported "${mask}" mask!`);
    }

    caseStyle(from: CaseStyleFrom, to: CaseStyleTo): string {
        const s = this.extend.string;

        switch (from) {
            case "camel":
                switch (to) {
                    case "kebab":
                        return s.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
                    case "dot":
                        return s.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1.$2").toLowerCase();
                    case "snake":
                        return s.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1_$2").toLowerCase();
                    case "flat":
                        return s.toLowerCase();
                    case "upper flat":
                        return s.toUpperCase();
                    default:
                        throw new Error(`Unknown case "${to}" style!`);
                }
            default:
                throw new Error(`Unknown case "${from}" style!`);
        }
    }
}
