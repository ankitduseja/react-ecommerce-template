import expect from 'expect';
import productPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('productPageReducer', () => {
  it('returns the initial state', () => {
    expect(productPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
