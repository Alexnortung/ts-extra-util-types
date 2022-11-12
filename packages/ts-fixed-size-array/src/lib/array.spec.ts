import test from 'ava'
import { arrayHasSize } from './array'
import { FixedSizeArray } from '../types/FixedSizeArray'

test('type annotation', (t) => {
    const myArray: FixedSizeArray<number, 4> = [1, 2, 5, 4]
    t.is(myArray[3], 4)
})

test('arrayHasSize', (t) => {
    const myArray = [1, 2, 3]
    if (!arrayHasSize(myArray, 3)) {
        t.fail()
        return
    }
    // This should not fail while building
    t.is(myArray[1], 2)
    t.is(myArray[2], 3)
})

test('number type fallback', (t) => {
    const myArray: FixedSizeArray<number, number> = [1, 2, 3]
    t.is(myArray[2], 3)
})

test('arrayHasSize statically inferred', (t) => {
    const myArray = [1, 2, 5]
    if (arrayHasSize(myArray, myArray.length)) {
        // This should not fail while building
        t.is(myArray[0], 1)
    }
    t.pass()
})

// TODO: Make this test pass and build
// test("distributive types", t => {
//     const desiredType: [number, number] | [number, number, number] = [1,2,3];
//     t.is(desiredType[1], 2);
//     t.is(desiredType[2], 3);
//     const myArray: FixedSizeArray<number, 2|3> = [1,2,3];
//     t.is(myArray[1], 2);
// });
