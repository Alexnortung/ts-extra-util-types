import { RepeatString } from "../types/RepeatString"

export const isRepeatedString = <Str extends string, Times extends number>(
    strToTest: string,
    str: Str,
    times: Times
): strToTest is RepeatString<Str, Times> => {
    const repeated = str.repeat(times)
    return repeated === strToTest
}
