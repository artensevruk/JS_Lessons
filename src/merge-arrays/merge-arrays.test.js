import assert from 'assert/strict';
import { mergeArrays, pushUniqueValues } from './merge-arrays.js';


describe('mergeArrays', () => {

  it('returns empty array if no arguments passed', () => {
    const empty = mergeArrays();
    assert.deepEqual(empty, []);
  });

  it('removes duplicates from array if only one argument passed', () => {
    const withDuplicates = [ 1, true, 1, false, true, null, 2, 'dup', 'dup' ];
    assert.deepEqual(mergeArrays(withDuplicates), [
      1, true, false, null, 2, 'dup'
    ]);
  });
});
