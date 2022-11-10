import { FixedSizeArray } from "../types/FixedSizeArray";

export const arrayHasSize = <T extends any, Size extends number>(
  arr: T[],
  size: Size
): arr is FixedSizeArray<T, Size> => {
  return arr.length === size;
};
