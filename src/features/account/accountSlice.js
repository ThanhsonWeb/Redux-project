const initialStateAccount = {
	balance: 0,
	loan: 0,
	loanPurpose: "",
};

export function accountReducer(state = initialStateAccount, action) {
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


//  four creator function

export function deposit(amount) {
	return { type: "account/deposit", payload: amount };
}
export function withdraw(amount) {
	return { type: "account/withdraw", payload: amount };
}

export function requestLoan(amount, purpose) {
	return { type: "account/requestLoan", payload: { amount, purpose } };
}
export function payLoan() {
	return { type: "account/payLoan" };
}