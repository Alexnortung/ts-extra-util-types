export type FixedSizeArray<
  T extends any,
  Size extends number,
  Acc extends T[] = []
> =
  // If size is a union or all numbers (number) then the array can have any size
  -1 extends Size
  ? T[]
  : Acc["length"] extends Size
  ? Acc
  : FixedSizeArray<T, Size, [...Acc, T]>;
