// import { HexChar } from 'ts-hex-type'
import { IntRange } from 'ts-range-type'
import { RepeatString } from 'ts-repeat-string'

// Please ignore this monstrosity, it works...
export const uuidNil = `${'0'.repeat(8)}${`-${'0'.repeat(4)}`.repeat(
    3
)}-${'0'.repeat(12)}` as `${RepeatString<'0', 8>}${RepeatString<
    `-${RepeatString<'0', 4>}`,
    3
>}-${RepeatString<'0', 12>}`

export type UuidNil = typeof uuidNil;

type Versions = IntRange<1, 5>

// This sadly does not work since typescript think it is a too complex union.
// type UuidHelper<Version extends Versions> = `${RepeatString<
//     HexChar,
//     8
// >}-${RepeatString<HexChar, 4>}-${Version}${RepeatString<HexChar, 3>}-${
//     | 8
//     | 9
//     | 'a'
//     | 'b'}${RepeatString<HexChar, 3>}-${RepeatString<HexChar, 12>}`
type UuidHelper<Version extends Versions> = `${string}-${string}-${Version}${string}-${8 | 9 | 'a' | 'b' | 'A' | 'B'}${string}-${string}`

export type UuidV1 = UuidHelper<1>
export type UuidV2 = UuidHelper<2>
export type UuidV3 = UuidHelper<3>
export type UuidV4 = UuidHelper<4>
export type UuidV5 = UuidHelper<5>

export type Uuid = UuidV1 | UuidV2 | UuidV3 | UuidV4 | UuidV5
