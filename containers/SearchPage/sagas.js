// import { take, call, put, select } from 'redux-saga/effects';
import { take, call, put, select, race } from 'redux-saga/effects';
import * as C from './constants';
import * as actions from './actions';
import { LOCATION_CHANGE } from 'react-router-redux';
import request from 'utils/request';
// Individual exports for testing
export function* defaultSaga2() {
  return;
}

// All sagas to be loaded
export default [
  defaultSaga,
];

// Individual exports for testing
export function* defaultSaga() {
  const requestURL = `http://s3.amazonaws.com/clientwebstatic/test/results.json`;
  // Use call from redux-saga for easier testing
  const repos = yield call(request, requestURL);
  // We return an object in a specific format, see utils/request.js for more information
  if ((repos.err === undefined || repos.err === null) && typeof repos.data==='object' && repos.data.result==='success') {
    yield put(actions.onLoadSuccess(repos.data.products));
  } else {
    var errormsg='Loading Init Failed';
    if(repos.data && typeof repos.data.error==='string') {
      errormsg+=': '+repos.data.error;
    }
    yield put(actions.onLoadFail(errormsg));
  }
}
