/*
 *
 * ProductPage reducer
 *
 */

 import { fromJS } from 'immutable';
 import * as C from './constants';

 const initialState = fromJS({
   loaded:'pending',
   initdata:null,
 });

 function productPageReducer(s = initialState, action) {
   switch (action.type) {
     case C.ONLOAD:
       s=s.set('loaded','trying');
     break;
     case C.ONLOAD_SUCCESS:
       s=s.set('loaded','success');
       s=s.set('initdata',action.data);
     break;
     case C.ONLOAD_FAIL:
       s=s.set('loaded','fail');
     break;
     case C.DEFAULT_ACTION:
     default:
   }
   return s;
 }

export default productPageReducer;
