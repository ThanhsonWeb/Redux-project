// 1. initialState
const initialStateCustomer = {
	fullName: "",
	nationalID: "",
	createdAt: "",
};
// 2. reducer function   ( 2 case : create and update)
export function customerReducer(state = initialStateCustomer, action) {
	switch (action.type) {
		case "customer/createCustomer":
			return {
				...state,
				fullName: action.payload.fullName, // take fullName from payload
				nationalID: action.payload.nationalID,
				createdAt: action.payload.createdAt,
			};
		case "customer/updateName":
			return { ...state, fullName: action.payload };
		default:
			return state;
	}
}

// creator function

export function createCustomer(fullName, nationalID) {
	return {
		type: "customer/createCustomer",
		payload: { fullName, nationalID, createdAt: new Date().toISOString() },
	};
}

export function updateName(fullName) {
	return { type: "customer/updateName", payload: fullName };
}
