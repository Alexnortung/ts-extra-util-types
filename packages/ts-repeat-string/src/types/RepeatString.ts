export type RepeatString<
    Str extends string,
    Times extends number,
    Acc extends string = '',
    Counter extends any[] = []
> = Counter['length'] extends Times
    ? Acc
    : RepeatString<Str, Times, `${Acc}${Str}`, [...Counter, 0]>
