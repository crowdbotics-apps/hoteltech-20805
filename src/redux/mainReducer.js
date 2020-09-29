import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView1115129Reducer from '../features/CalendarView1115129/redux/reducers';
import SignUp22115128Reducer from '../features/SignUp22115128/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView1115129: CalendarView1115129Reducer,
SignUp22115128: SignUp22115128Reducer,

});