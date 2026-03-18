import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "./customerSlice";
function Customer() {
	const [fullName, setFullName] = useState("");
	const [nationalId, setNationalId] = useState("");

	//   b1 useDispatch()
	const dispatch = useDispatch();

	function handleClick() {
		if (!fullName || !nationalId) return;
		// pass Name and ID as a parameter to this function
		// send it by using dispatch
		dispatch(createCustomer(fullName, nationalId));
	}

	return (
		<div>
			<h2>Create new customer</h2>
			<div className="inputs">
				{/* 1 state to store name */}
				<div>
					<label>Customer full name</label>
					<input
						value={fullName}
						onChange={(e) => setFullName(e.target.value)}
					/>
				</div>
				<div>
					<label>National ID</label>
					{/* 1 state to store ID  */}
					<input
						value={nationalId}
						onChange={(e) => setNationalId(e.target.value)}
					/>
				</div>
				<button onClick={handleClick}>Create new customer</button>
			</div>
		</div>
	);
}

export default Customer;
