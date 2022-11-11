import { Enumerate } from "../types/Enumerate";

export const isInEnumeration = (
  num: number,
  to: number
): num is Enumerate<typeof to> => {
  return 0 <= num && num < to;
};
