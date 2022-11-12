import test from 'ava'
import { arrayHasSize, FixedSizeArray } from 'ts-fixed-size-array'
import {
    Enumerate,
    EnumerateExclusive,
    EnumerateInclusive,
} from '../types/Enumerate'

import {
    isInEnumeration,
    isInExclusiveEnumeration,
    isInInclusiveEnumeration,
} from './enumerate'

test('is enumeration', (t) => {
    t.true(isInEnumeration(3, 4))
    t.true(isInEnumeration(2, 4))
    t.false(isInEnumeration(-1, 4))
    t.false(isInEnumeration(8, 4))

    t.true(isInInclusiveEnumeration(3, 3))
    t.false(isInExclusiveEnumeration(3, 3))
    t.false(isInEnumeration(3, 3))
})

test('type annotations', (t) => {
    const a: EnumerateInclusive<2> = 2
    const b: EnumerateExclusive<2> = 1
    const c: Enumerate<2> = 1
    t.is(a, a)
    t.is(b, b)
    t.is(c, c)
})

test('strongly typed array access', (t) => {
    // Strongly typed array access
    const getItemInArray = (
        arr: FixedSizeArray<any, 3>,
        index: EnumerateExclusive<3>
    ) => {
        return arr[index]
    }

    const arr = Object.freeze(['a', 'b', 'c'])
    if (!arrayHasSize(arr, 3)) {
        t.fail()
        return
    }
    t.is(getItemInArray(arr, 1), 'b')
})
