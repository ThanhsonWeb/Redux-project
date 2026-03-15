import { createStore, combineReducers } from "redux";
import { accountReducer } from "./features/account/accountSlice";
import { customerReducer } from "./features/customers/customerSlice";
//  1 . create 2 folder in features
//  2 . create ....Slice.js to things relate (state , reducer , function creator )
//  3 . we just use redux here
const rootReducer = combineReducers({
	name1: accountReducer,
	name2: customerReducer,
});

const store = createStore(rootReducer);

export default store;
