export type EnumerateExclusive<
    N extends number,
    Acc extends number[] = []
> = Acc['length'] extends N
    ? Acc[number]
    : EnumerateExclusive<N, [...Acc, Acc['length']]>

export type EnumerateInclusive<
    N extends number,
    Acc extends number[] = []
> = Acc['length'] extends N
    ? [...Acc, Acc['length']][number]
    : EnumerateInclusive<N, [...Acc, Acc['length']]>

export type Enumerate<N extends number> = EnumerateExclusive<N>
