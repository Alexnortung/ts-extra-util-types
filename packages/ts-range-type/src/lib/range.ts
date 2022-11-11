import { IntRange, IntRangeExclusive, IntRangeInclusive } from "../types/IntRange";

const precondition = (num: number) => {
  return Number.isInteger(num) && num >= 0;
};

// TODO: add constraint to make sure from and to are positives
export const isInRangeExclusive = <From extends number, To extends number>(
  num: number,
  from: From,
  to: To
): num is IntRangeExclusive<From, To> => {
  // IntRange does not work for negative numbers, so return false.
  if (!precondition(num)) {
    return false;
  }

  return from <= num && num < to;
};

export const isInRangeInclusive = <From extends number, To extends number>(
  num: number,
  from: From,
  to: To
): num is IntRangeInclusive<From, To> => {
  // IntRange does not work for negative numbers, so return false.
  if (!precondition(num)) {
    return false;
  }

  return from <= num && num < to;
};

export const isInRange = isInRangeInclusive;
