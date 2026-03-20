import { applyMiddleware, createStore, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";


import { accountReducer } from "./features/account/accountSlice";
import { customerReducer } from "./features/customers/customerSlice";
const rootReducer = combineReducers({
	account: accountReducer,
	customer: customerReducer,
});
// we want to use thunk middleware  in our app

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
