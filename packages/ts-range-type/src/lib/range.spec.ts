import test from "ava";
import { isInRangeExclusive } from "./range";
import { FixedSizeArray } from "ts-fixed-size-array";
import { IntRange, IntRangeExclusive } from "../types/IntRange";

test("is in range", (t) => {
  t.true(isInRangeExclusive(1, 0, 5));
  t.false(isInRangeExclusive(-1, 0, 5));
  t.false(isInRangeExclusive(99, 100, 200));
  t.false(isInRangeExclusive(201, 100, 200));
  t.false(isInRangeExclusive(200, 100, 200));
  t.true(isInRangeExclusive(150, 100, 200));
});

test("type annotations", t => {
  const a: IntRange<7, 10> = 10;
  const b: IntRange<7, 10> = 7;
  const c: IntRangeExclusive<7, 10> = 7;
  const d: IntRangeExclusive<7, 10> = 9;
  // It seems that 1000 is too large
  // const thisShouldBreak: IntRange<1, 1000> = 100;
  t.pass();
});

test("strongly typed array access", (t) => {
  const arr: FixedSizeArray<number, 6> = [1, 2, 3, 4, 5, 6];
  const index = 2;

  const indexInTooLargeRange /*: IntRangeExclusive<1, 10>*/ = Math.floor(9);
  if (!isInRangeExclusive(indexInTooLargeRange, 1, 10)) {
    t.fail();
    return;
  }

  // Should fail on build time so cannot
  // arr[indexInTooLargeRange];

  // type assertion, because I know better
  const randomNumber = Math.floor(
    Math.random() * arr.length
  ) as IntRangeExclusive<0, 6>;

  t.true(arr[randomNumber] > 0);
});
