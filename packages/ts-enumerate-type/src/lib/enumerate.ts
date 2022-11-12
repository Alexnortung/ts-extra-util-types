import { Enumerate, EnumerateExclusive } from '../types/Enumerate'

export const isInInclusiveEnumeration = (
    num: number,
    to: number
): num is Enumerate<typeof to> => {
    return 0 <= num && num <= to
}

export const isInExclusiveEnumeration = (
    num: number,
    to: number
): num is EnumerateExclusive<typeof to> => {
    return 0 <= num && num < to
}

export const isInEnumeration = isInExclusiveEnumeration
