import expect from 'expect';
import searchPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('searchPageReducer', () => {
  it('returns the initial state', () => {
    expect(searchPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
