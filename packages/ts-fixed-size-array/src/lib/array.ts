import { FixedSizeArray } from '../types/FixedSizeArray'

export const arrayHasSize = <T, Size extends number>(
    arr: readonly T[],
    size: Size
): arr is FixedSizeArray<T, Size> => {
    return arr.length === size
}
