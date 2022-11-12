import { EnumerateExclusive, EnumerateInclusive } from 'ts-enumerate-type'

export type IntRangeExclusive<From extends number, To extends number> = Exclude<
    EnumerateExclusive<To>,
    EnumerateExclusive<From>
>

export type IntRangeInclusive<From extends number, To extends number> = Exclude<
    EnumerateInclusive<To>,
    EnumerateExclusive<From>
>

export type IntRange<
    From extends number,
    To extends number
> = IntRangeInclusive<From, To>
