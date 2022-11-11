import { IntRangeExclusive } from "../types/IntRange";

// TODO: add constraint to make sure from and to are positives
export const isInRangeExclusive = <From extends number, To extends number>(
  num: number,
  from: From,
  to: To
): num is IntRangeExclusive<From, To> => {
  // IntRange does not work for negative numbers, so return false.
  if (num < 0) {
    return false;
  }

  return from <= num && num < to;
};
