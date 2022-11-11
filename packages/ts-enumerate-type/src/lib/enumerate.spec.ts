import test from "ava";
import { arrayHasSize, FixedSizeArray } from "ts-fixed-size-array";
import { Enumerate } from "../types/Enumerate";

import { isInEnumeration } from "./enumerate";

test("is enumeration", (t) => {
  t.true(isInEnumeration(3, 4));
  t.true(isInEnumeration(2, 4));
  t.false(isInEnumeration(-1, 4));
  t.false(isInEnumeration(8, 4));
});

test("strongly typed array access", (t) => {
  // Strongly typed array access
  const getItemInArray = (arr: FixedSizeArray<any, 3>, index: Enumerate<3>) => {
    return arr[index];
  };
  
  const arr = Object.freeze(['a', 'b', 'c']);
  if (!arrayHasSize(arr, 3)) {
    t.fail();
    return;
  }
  t.is(getItemInArray(arr, 1), 'b')
});
