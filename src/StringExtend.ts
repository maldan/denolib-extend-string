export class StringExtend {
    private _str = "";

    constructor(string: string) {
        this._str = string;
    }

    get digits(): number {
        return Number(this._str.replace(/\D/g, ""));
    }

    replaceAt(index: number, replacement: string): string {
        return (
            this._str.substr(0, index) + replacement + this._str.substr(index + replacement.length)
        );
    }

    get capitalize(): string {
        return this._str[0].toUpperCase() + this._str.slice(1);
    }

    get snakeToCamel(): string {
        return this._str.replace(/(_\w)/g, (x) => x[1].toUpperCase());
    }

    get kebabToCamel(): string {
        return this._str.replace(/(-\w)/g, (x) => x[1].toUpperCase());
    }

    get dotToCamel(): string {
        return this._str.replace(/(\.\w)/g, (x) => x[1].toUpperCase());
    }

    get camelToKebab(): string {
        return this._str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
    }

    get camelToDot(): string {
        return this._str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1.$2").toLowerCase();
    }

    get isValidEmail(): boolean {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(this._str.toLowerCase());
    }

    get htmlSpecialChars(): string {
        return this._str
            .replace(/&/g, "&amp;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
    }
}

export function EString(str: string): StringExtend {
    return new StringExtend(str);
}
