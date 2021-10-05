// -*- coding: utf-8, tab-width: 2 -*-

import assert from 'assert';

import fc from '../alias.js';

const same = assert.deepStrictEqual;


same(fc([
  [11, 22],
  ['a', 'b', 'c'],
]), [
  [ 11, 'a' ],
  [ 11, 'b' ],
  [ 11, 'c' ],
  [ 22, 'a' ],
  [ 22, 'b' ],
  [ 22, 'c' ],
]);


console.info('+OK basics tests passed.');
