import { Enumerate } from 'ts-enumerate-type';

export type IntRangeExclusive<From extends number, To extends number> = Exclude<
  Enumerate<To>,
  Enumerate<From>
>;
