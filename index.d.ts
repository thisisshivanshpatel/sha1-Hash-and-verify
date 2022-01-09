/**
 * @name sha1-hash-and-verify
 * @namespace sha1-hash-and-verify
 * @description This package is used for sha1 hashing and verifying the hashed data
 * @version 1.0.0
 * @author shivansh patel <shivanshpatel.1999@gmail.com>
 * @license MIT
 * @example sha1('Hello World!');
 * @example verifyHash('Hello World!',hashedData)
 */

export function sha1(data:string);
export function verifyHash(data:string,hashedData:string);