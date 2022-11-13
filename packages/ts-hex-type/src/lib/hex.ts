import { HexChar, hexCharArray } from '../types/HexChar';

export const isHexChar = (char: string): char is HexChar  => {
    // Conversion is needed to make .includes work
    const searchArray = hexCharArray as readonly string[];
    return searchArray.includes(char);
}
