import { Char } from "../types/Char"

export const isChar = (str: string): str is Char => {
    return str.length === 1;
};
