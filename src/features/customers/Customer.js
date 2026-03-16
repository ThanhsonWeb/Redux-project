import { useSelector } from "react-redux";
function Customer() {
	// read data from store , we reed customerReducer here to take info !
	const customer = useSelector((store) => store.customer.fullName);
	return <h2>👋 Welcome, {customer}</h2>;
}

export default Customer;
