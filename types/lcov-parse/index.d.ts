interface Detail {
    hit: number,
    line: number
}

interface Lines {
    details: Array<Detail>
    hit: number,
    found: number
}

interface LcovSection {
    branches: Object,
    file: string,
    functions: Object,
    lines: Lines
}

declare function parse(file: string, cb: (err: Error, data: Array<LcovSection>) => void): void

declare namespace parse {
    function source(str: string, cb: (err: Error, data: Array<LcovSection>) => void)
}

declare module "lcov-parse" {
    export = parse;
}