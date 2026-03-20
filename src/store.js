// b2 :import 
import { configureStore } from "@reduxjs/toolkit";

import { accountReducer } from "./features/account/accountSlice";
import { customerReducer } from "./features/customers/customerSlice";
// b1 : npm i @reduxjs/toolkit --force
// b3 :  call configureStore and wrap 2 reducers ! 
const store = configureStore({
	reducer: {
		account: accountReducer,
		customer: customerReducer,
	},
});

export default store;
