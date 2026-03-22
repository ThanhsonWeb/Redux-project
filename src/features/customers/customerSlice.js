import { createSlice } from "@reduxjs/toolkit";

// 1. initialState
const initialState = {
	fullName: "",
	nationalID: "",
	createdAt: "",
};

const customerSlice = createSlice({
	name: "customer",
	initialState,
	reducers: {
		// reducer 1
		createCustomer: {
			prepare(fullName, nationalID) {
				return {
					payload: {
						fullName,
						nationalID,
						createdAt: new Date().toISOString(),
					},
				};
			},

			reducer(state, action) {
				state.fullName = action.payload.fullName;
				state.nationalID = action.payload.nationalID;
				state.createAt = action.payload.createAt;
			},
		},
		//  reducer 2
		updateName(state, action) {
			state.fullName = action.payload;
		},
	},
});

export const { createCustomer, updateName } = customerSlice.actions;

export default   customerSlice.reducer;

// // 2. reducer function   ( 2 case : create and update)
// export function customerReducer(state = initialStateCustomer, action) {
// 	switch (action.type) {
// 		case "customer/createCustomer":
// 			return {
// 				...state,
// 				fullName: action.payload.fullName, // take fullName from payload
// 				nationalID: action.payload.nationalID,
// 				createdAt: action.payload.createdAt,
// 			};
// 		case "customer/updateName":
// 			return { ...state, fullName: action.payload };
// 		default:
// 			return state;
// 	}
// }

// // creator function

// export function createCustomer(fullName, nationalID) {
// 	return {
// 		type: "customer/createCustomer",
// 		payload: { fullName, nationalID, createdAt: new Date().toISOString() },
// 	};
// }

// export function updateName(fullName) {
// 	return { type: "customer/updateName", payload: fullName };
// }
