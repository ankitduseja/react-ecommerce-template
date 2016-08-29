import { createSelector } from 'reselect';

/**
 * Direct selector to the productPage state domain
 */
const selectProductPageDomain = () => state => state.get('productPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ProductPage
 */

const selectProductPage = () => createSelector(
  selectProductPageDomain(),
  (substate) => substate.toJS()
);

export default selectProductPage;
export {
  selectProductPageDomain,
};
