import Customer from "./features/customers/Customer";
import AccountOperations from "./features/account/AccountOperations";
import BalanceDisplay from "./features/account/BalanceDisplay";
import CreateCustomer from "./features/customers/CreateCustomer";
import { useSelector } from "react-redux";

function App() {
	// useSelector to read the data from the store !
	const fullName = useSelector((store) => store.customer.fullName);

	return (
		<div>
			<h1>🏦 The React-Redux Bank ⚛️</h1>
			{fullName === "" ? (
				<CreateCustomer />
			) : (
				<>
					<Customer />
					<AccountOperations />
					<BalanceDisplay />
				</>
			)}
		</div>
	);
}

export default App;
