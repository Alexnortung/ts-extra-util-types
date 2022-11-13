import test from 'ava'
import { isRepeatedString } from './repeat-string'
import { RepeatString } from '../types/RepeatString'

test('is repeated string', (t) => {
    t.true(isRepeatedString('aaa', 'a', 3))
    t.true(isRepeatedString('abababab', 'ab', 4))
    t.false(isRepeatedString('aca', 'ac', 2))
})

test('type annotations', (t) => {
    const a: RepeatString<'ab', 2> = 'abab'
    // should not work
    // const b: RepeatString<'ab', 2> = 'aaa';

    const b: RepeatString<'a' | 'b', 3> = 'abb'

    t.pass();
})
