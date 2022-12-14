export const hexCharArray = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
] as const

export type HexCharLowercase = typeof hexCharArray[number]
export type HexCharUppercase = Uppercase<HexCharLowercase>
export type HexChar = HexCharLowercase | HexCharUppercase
