/*
 *
 * SearchPage actions
 *
 */

import * as C from './constants';

export function defaultAction() {
  return {
    type: C.DEFAULT_ACTION,
  };
}

export function onLoad() {
  return {
    type: C.ONLOAD,
  };
}

export function onLoadSuccess(data) {
  return {
    type: C.ONLOAD_SUCCESS,
    data,
  };
}

export function onLoadFail() {
  return {
    type: C.ONLOAD_FAIL,
  };
}
