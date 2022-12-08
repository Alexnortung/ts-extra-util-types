export type RepeatStringHelper<
    Str extends string,
    Times extends number,
    Acc extends string = '',
    Counter extends any[] = []
> = Counter['length'] extends Times
    ? Acc
    : RepeatStringHelper<Str, Times, `${Acc}${Str}`, [...Counter, 0]>

type RepeatStringUnion<
    Str extends string,
    Times extends number | number[]
> = Times extends number
    ? RepeatStringHelper<Str, Times>
    : {
          [K in keyof Times]: Times[K] extends number
              ? RepeatStringHelper<Str, Times[K]>
              : never
      }[keyof Times]

export type RepeatString<
    Str extends string,
    Times extends number | number[]
> = RepeatStringUnion<Str, Times>
