import test from 'ava'
import { isChar } from './char'
import { Char } from '../types/Char'

test('isChar', (t) => {
    t.true(isChar('a'))
    t.true(isChar('b'))
    t.true(isChar('0'))
    t.true(isChar('\ud83d'))
    t.false(isChar('aaaa'))
    t.false(isChar('🥳'))
})

// test('type annotation', t => {
//     const myChar: Char = "a";
//     t.true(isChar(myChar));
// });

test('type assertion', (t) => {
    const myChar = 'a' as Char
    t.true(isChar(myChar))
})

// test('template literal type', t => {
//     type twoChars = `${Char}${Char}`
// });
