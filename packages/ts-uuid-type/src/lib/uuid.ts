import { anyNonNil, nil, v1, v2, v3, v4, v5 } from "is-uuid";
import { Uuid, UuidNil, UuidV1, UuidV2, UuidV3, UuidV4, UuidV5 } from "../types/Uuid";

/**
 * Returns true if the value is a v1 UUID
 * @param str The value to test
 */
export const isUuidv1 = (str: string): str is UuidV1 => v1(str);

/**
 * Returns true if the value is a v2 UUID
 * @param str The value to test
 */
export const isUuidv2 = (str: string): str is UuidV2 => v2(str);

/**
 * Returns true if the value is a v3 UUID
 * @param str The value to test
 */
export const isUuidv3 = (str: string): str is UuidV3 => v3(str);

/**
 * Returns true if the value is a v4 UUID
 * @param str The value to test
 */
export const isUuidv4 = (str: string): str is UuidV4 => v4(str);

/**
 * Returns true if the value is a v5 UUID
 * @param str The value to test
 */
export const isUuidv5 = (str: string): str is UuidV5 => v5(str);

/**
 * Returns true if the value is a any version of UUID excluding nil
 * @param str The value to test
 */
export const isUuid = (str: string): str is Uuid => anyNonNil(str);

/**
 * Returns true if the value is a nil UUID
 * @param str The value to test
 */
export const isUuidNil = (str: string): str is UuidNil => nil(str);


