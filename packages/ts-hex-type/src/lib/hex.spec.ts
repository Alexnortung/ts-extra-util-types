import test from 'ava'
import { HexChar } from '../types/HexChar'
import { isHexChar } from './hex'

test('isHexChar', t => {
    t.true(isHexChar('0'))
    t.true(isHexChar('1'))
    t.true(isHexChar('f'))
    t.true(isHexChar('A'))
})
