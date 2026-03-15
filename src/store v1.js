import { createStore, combineReducers } from "redux";

const initialStateAccount = {
	balance: 0,
	loan: 0,
	loanPurpose: "",
};
// b1 : create global state
const initialStateCustomer = {
	fullName: "",
	nationalID: "",
	createdAt: "",
};
// first global store
function accountReducer(state = initialStateAccount, action) {
	switch (action.type) {
		case "account/deposit":
			return { ...state, balance: state.balance + action.payload };
		case "account/withdraw":
			return { ...state, balance: state.balance - action.payload };
		case "account/requestLoan":
			if (state.loan > 0) return state;
			// Later
			return {
				...state,
				loan: action.payload.amount, // lấy amount từ payload
				loanPurpose: action.payload.purpose,
				// balance : state.balance + action.payload.amount
			};
		case "account/payLoan":
			return {
				...state,
				balance: state.balance - state.loan,
				loan: 0,
				loanPurpose: "",
			};

		default:
			return state;
	}
}
//  b2 :  create second global store
function customerReducer(state = initialStateCustomer, action) {
	switch (action.type) {
		case "customer/createCustomer":
			return {
				...state,
				fullName: action.payload.fullName,
				nationalID: action.payload.nationalID,
				createdAt: action.payload.createdAt,
			};
		case "customer/updateName":
			return { ...state, fullName: action.payload };
		default:
			return state;
	}
}
//  b3 : import combineReducers and use it here
//  now we have 2 reducer !
const rootReducer = combineReducers({
	name1: accountReducer,
	name2: customerReducer,
});

// action creator function
const store = createStore(rootReducer);
function deposit(amount) {
	return { type: "account/deposit", payload: amount };
}
function withdraw(amount) {
	return { type: "account/withdraw", payload: amount };
}

function requestLoan(amount, purpose) {
	return { type: "account/requestLoan", payload: { amount, purpose } };
}
function payLoan() {
	return { type: "account/payLoan" };
}
// store.dispatch({ type: "account/deposit", payload: 500 });
store.dispatch(deposit(500));
store.dispatch(withdraw(200));
store.dispatch(requestLoan(2000, "Buy a car"));
store.dispatch(payLoan());
console.log(store.getState());

function createCustomer(fullName, nationalID) {
	return {
		type: "customer/createCustomer",
		payload: { fullName, nationalID, createdAt: new Date().toISOString() },
	};
}

function updateName(fullName) {
	return { type: "account/updateName", payload: fullName };
}

store.dispatch(createCustomer("NT Son", 123));
console.log(store.getState());
                                              